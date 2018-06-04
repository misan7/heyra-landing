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

        const methods = (ref, userId) => ({
          userId,
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
          return resolve(methods(doc.ref, userId));
        }

        admin
          .firestore()
          .collection('users')
          .add({ userId, created_at: now() })
          .then((ref) => resolve(methods(ref, userId)))
          .catch(reject);
      })
  );

const getOffer = (agent, userId) => {
  let offer = {};

  const btoa = (str) => {
    if (Buffer.byteLength(str) !== str.length) throw new Error('bad string!');
    return Buffer(str, 'binary').toString('base64');
  };

  const { companyName } = agent.parameters;
  const hash = btoa(JSON.stringify({ userId, platform: 'whatsapp' }));

  switch (companyName) {
    case 'Securitas': {
      offer = {
        name: 'OFFER_TYCO',
        parameters: {
          link: `https://alarmbots.com/offer/tyco/?${hash}`
        }
      };
      break;
    }
    default:
      offer = {
        name: 'OFFER_SECURITAS',
        parameters: {
          link: `https://alarmbots.com/offer/securitas/?${hash}`
        }
      };
      break;
  }

  agent.setFollowupEvent(offer);
};

module.exports = { Notification, User, getOffer };
