// https://github.com/dialogflow/dialogflow-fulfillment-nodejs/blob/master/docs/WebhookClient.md#WebhookClient+session
'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { WebhookClient } = require('dialogflow-fulfillment');
// const { Card, Suggestion } = require('dialogflow-fulfillment');

admin.initializeApp(functions.config().firebase);
process.env.DEBUG = 'dialogflow:debug';

exports.fulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  if (agent.action === 'user.upgrade') {
    const userId = agent.session;

    admin
      .firestore()
      .collection('users')
      .where('userId', '==', userId)
      .limit(1)
      .get()
      .then((snapshot) => {
        let user = snapshot.docs[0];
        if (!user) {
          // Add the user to DB
          admin
            .firestore()
            .collection('users')
            .add({
              userId: userId
            })
            .then((ref) => {
              sendResponse('Added new user');
            });
        } else {
          // User in DB
          sendResponse('User already exists');
        }
      });
  }
});
