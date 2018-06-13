'use strict';

// https://github.com/dialogflow/dialogflow-fulfillment-nodejs/blob/master/docs/WebhookClient.md#WebhookClient+session
const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Notification, User, getOffer, getInfo } = require('./etc/helpers');
const camelCase = require('lodash/camelCase');

// const { Card, Suggestion } = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug';

const notification = Notification(functions.config().gmail);

exports.fulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  let intentMap = new Map();
  const actionName = camelCase(agent.action);

  switch (actionName) {
    case 'remove':
      intentMap.set(null, () => {
        agent.clearOutgoingContexts();
        agent.setFollowupEvent({ name: 'Welcome' });
      });

      return agent.handleRequest(intentMap);

    case 'info':
      intentMap.set(null, () => {
        agent.setFollowupEvent({ name: 'PRIVACY', parameters: getInfo(agent) });
      });

      return agent.handleRequest(intentMap);

    default:
      // Register user
      User(agent.session || request.body.sessionId).then((user) => {
        user.addContexts(agent.intent, agent.contexts).then((parameters) => {
          console.log(
            `Contexts added.
              Execute ${actionName}. SessionId: ${user.sessionId}.`
          );

          const actionsParams = {
            agent,
            sessionId: user.sessionId,
            parameters
          };

          console.log('Parameters: ' + JSON.stringify(parameters));

          const actions = {
            offerSend: () => getOffer(actionsParams),
            notificationSend: () => notification.createUser(actionsParams)
          };

          if (agent.action) {
            intentMap.set(null, actions[actionName]);
          }

          return agent.handleRequest(intentMap);
        });
      });
  }
});
