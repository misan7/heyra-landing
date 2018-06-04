'use strict';

// https://github.com/dialogflow/dialogflow-fulfillment-nodejs/blob/master/docs/WebhookClient.md#WebhookClient+session
const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Notification, User, getOffer } = require('./etc/helpers');
const camelCase = require('lodash/camelCase');

// const { Card, Suggestion } = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug';

const notification = Notification(functions.config().gmail);

exports.fulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  // https://github.com/dialogflow/dialogflow-fulfillment-nodejs/blob/master/docs/WebhookClient.md#webhookclientenableappendmodeenable
  webhookClient.enableAppendMode(true);

  let intentMap = new Map();

  // Register user
  User(agent.session || request.body.sessionId).then((user) => {
    user.addContexts(agent.intent, agent.contexts).then(() => {
      console.log(`Contexts added. Execute ${camelCase(agent.action)}.`);

      const actions = {
        offerSend: () => getOffer(agent, user.userId),
        notificationSend: () => notification.createUser(user.ref)
      };

      if (agent.action) {
        intentMap.set(null, actions[camelCase(agent.action)]);
      }

      return agent.handleRequest(intentMap);
    });
  });
});
