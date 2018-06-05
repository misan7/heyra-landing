'use strict';

// https://cloud.google.com/nodejs/docs/reference/firestore/0.13.x/?authuser=0

const admin = require('firebase-admin');
const functions = require('firebase-functions');
const defaults = require('lodash/defaults');
const map = require('lodash/map');
const omitBy = require('lodash/omitBy');
const concat = require('lodash/concat');

const nodemailer = require('nodemailer');

admin.initializeApp(functions.config().firebase);

const Notification = ({ user, pass, notification }) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });

  return {
    createUser: ({
      alarm_phonenumber,
      alarm_size,
      alarm_stole,
      alarm_type,
      alarm_withalarm,
      alarm_zipcode,
      alarm_contactname,
      alarm_companyname,
      alarm_location
    }) => {
      const isHome = /home_/;
      const YesNo = (value) => (value === 'true' ? 'Si' : 'No');

      let type = '';

      if (isHome.test(alarm_type)) {
        const isHabitual = /home_habitual/;
        type = `Tipo: Domicilio ${
          isHabitual.test(alarm_type) ? 'Habitual' : 'Segunda residencia'
        }`;
      } else {
        const isNormal = /business_normal/;
        type = `Tipo: Empresa ${
          isNormal.test(alarm_type) ? 'Pequeña' : 'Grande'
        }`;
      }

      let data = [
        `Nombre: ${alarm_contactname}`,
        `Teléfono: ${alarm_phonenumber}`,
        type,
        `Tamaño: ${alarm_size} m2`,
        `Robo: ${YesNo(alarm_stole)}`,
        `Tiene alarma: ${YesNo(alarm_withalarm)}`
      ];

      if (alarm_zipcode) {
        data = concat(data, [`Código postal: ${alarm_zipcode}`]);
      } else if (alarm_location) {
        data = concat(data, [`Ciudad: ${alarm_location}`]);
      }

      if (alarm_withalarm === 'true' && alarm_companyname) {
        data = concat(data, [`Compañía: ${alarm_companyname}`]);
      }

      return transport.sendMail({
        from: 'Alarmbots <info@alarmbots.com>',
        to: notification,
        subject: 'Solicitud de información',
        text: data.join('\n')
      });
    }
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
              const parameters = extractParameters(contexts);

              console.log('Parameters: ' + JSON.stringify(parameters));

              ref
                .collection('contexts')
                .add({ contexts, intentName, created_at: now() })
                .then(() =>
                  ref
                    .update(parameters)
                    .then(() => resolve(parameters))
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

const getOffer = (agent, platform, userId) => {
  let offer = {};

  const stringify = (obj) =>
    Buffer(JSON.stringify(obj), 'binary').toString('base64');

  const { alarm_companyname } = agent.parameters;
  const hash = stringify({ userId, platform });

  switch (alarm_companyname) {
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
