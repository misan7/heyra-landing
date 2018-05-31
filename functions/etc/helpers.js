'use strict';

// https://cloud.google.com/nodejs/docs/reference/firestore/0.13.x/?authuser=0

const admin = require('firebase-admin');
const functions = require('firebase-functions');
const defaults = require('lodash/defaults');
const map = require('lodash/map');
const omitBy = require('lodash/omitBy');

const nodemailer = require('nodemailer');

admin.initializeApp(functions.config().firebase);

const Notification = ({ user, pass, notification }) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });

  return {
    createUser: (user) =>
      new Promise((resolve, reject) => {
        // Get user
        ref.get().then((snapshot) => {
          console.log('User: ' + JSON.stringify(snapshot.data()));

          return transport.sendMail(
            {
              from: 'Alarmbots <info@alarmbots.com>',
              to: notification,
              subject: 'Nuevo usuario',
              text: JSON.stringify(user)
            },
            resolve
          );
        });
      })
  };
};

const User = (userId) =>
  new Promise((resolve, reject) =>
    admin
      .firestore()
      .collection('users')
      .where('userId', '==', userId)
      .limit(1)
      .get()
      .then((snapshot) => {
        const now = () => new Date().toISOString();
        const isOriginal = /\.original/;
        const extractParameters = (contexts) => {
          let values = {};
          map(contexts, 'parameters').forEach((obj) =>
            defaults(values, omitBy(obj, (val, key) => isOriginal.test(key)))
          );
          return values;
        };

        const methods = (ref) => ({
          ref,
          addContexts: (intentName, contexts) =>
            new Promise((resolve, reject) => {
              console.log(
                'Parameters: ' + JSON.stringify(extractParameters(contexts))
              );

              ref
                .collection('contexts')
                .add({ contexts, intentName, created_at: now() })
                .then(() =>
                  ref
                    .update(extractParameters(contexts))
                    .then(resolve)
                    .catch(reject)
                );
            })
        });

        const doc = snapshot.docs[0];

        if (doc) {
          return resolve(methods(doc.ref));
        }

        admin
          .firestore()
          .collection('users')
          .add({ userId, created_at: now() })
          .then((ref) => resolve(methods(ref)))
          .catch(reject);
      })
  );

const getOffer = (agent) => {
  let offer = {};

  const { companyName } = agent.parameters;

  switch (companyName) {
    case 'Securitas': {
      offer = {
        name: 'OFFER_TYCO',
        parameters: {
          discount: '499'
        }
      };
      break;
    }
    default:
      offer = {
        name: 'OFFER_SECURITAS',
        parameters: {
          discount: '499'
        }
      };
      break;
  }

  agent.setFollowupEvent(offer);
};

module.exports = { Notification, User, getOffer };
