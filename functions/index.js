'use strict';

// https://github.com/dialogflow/dialogflow-fulfillment-nodejs/blob/master/docs/WebhookClient.md#WebhookClient+session
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Notification } = require('./helpers');

// const { Card, Suggestion } = require('dialogflow-fulfillment');

admin.initializeApp(functions.config().firebase);
process.env.DEBUG = 'dialogflow:debug';

const notification = Notification(functions.config().gmail);

exports.fulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  if (agent.action === 'user.upgrade') {
    const userId = agent.session || request.body.sessionId;

    console.log(agent.contexts);

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
              notification
                .createUser(user)
                .then(() =>
                  console.log(`Added new user with sessionId ${userId}`)
                );
            });
        } else {
          // User in DB
          console.log(`User already exists with sessionId ${userId}`);
        }
      });
  }
});
