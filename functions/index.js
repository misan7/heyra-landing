'use strict';

// https://github.com/dialogflow/dialogflow-fulfillment-nodejs/blob/master/docs/WebhookClient.md#WebhookClient+session
const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Notification, User, sendOffer } = require('./etc/helpers');

// const { Card, Suggestion } = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug';

const notification = Notification(functions.config().gmail);

exports.fulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  let intentMap = new Map();
  let handleName = null;

  switch (agent.action) {
    case 'offer.send':
      // Register user
      User(agent.session || agent.originalRequest.body.sessionId).then(
        (user) => {
          user
            .addContexts(agent.intent, agent.contexts)
            .then(() => console.log('Contexts added!'));
        }
      );

      handleName = sendOffer;
      break;
    case 'notification.send':
      handleName = sendNotification;
      break;
  }

  if (handleName) {
    intentMap.set(null, handleName);
  }

  return agent.handleRequest(intentMap);
});
