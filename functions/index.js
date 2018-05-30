'use strict';

// https://github.com/dialogflow/dialogflow-fulfillment-nodejs/blob/master/docs/WebhookClient.md#WebhookClient+session
const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Notification, User } = require('./helpers');

// const { Card, Suggestion } = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug';

const notification = Notification(functions.config().gmail);

exports.fulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  const sendOffer = () => {
    // Register user
    User(agent.session || request.body.sessionId).then((user) => {
      user
        .addContexts(agent.intent, agent.contexts)
        .then(() => console.log('Contexts added!'));
    });

    agent.add('Esta es tu oferta de Securitas');
    agent.setFollowupEvent({ name: 'OFFER_SECURITAS' });
  };

  let intentMap = new Map();
  if (agent.action === 'offer.send') {
    intentMap.set(null, sendOffer);
  }
  return agent.handleRequest(intentMap);
});
