import React, { Component } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default class ChatBot extends Component {
  render() {
    return (
      <MessengerCustomerChat
        pageId="2080068382275303"
        appId="317328275466661"
        themeColor="#13cf13"
        loggedInGreeting="¡Hola! Soy Alarmbots, un bot que compara gratis alarmas para hogar y negocio."
        loggedOutGreeting="¡Hola! Soy Alarmbots, un bot que compara gratis alarmas para hogar y negocio."
        language="es_ES"
      />
    );
  }
}
