'use strict';

const nodemailer = require('nodemailer');

exports.Notification = ({ user, pass, notification }) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });

  return {
    createUser: (user) => {
      return transport.sendMail({
        from: 'Alarmbots <info@alarmbots.com>',
        to: notification,
        subject: 'Nuevo usuario',
        text: 'Esto es una prueba'
      });
    }
  };
};
