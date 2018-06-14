import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const hour = (date) => {
  return `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  }`;
};

export default class Chatbot extends Component {
  state = { isActive: false };

  componentDidMount() {
    this.$el = $(this.el);

    var now = new Date();
    this.$el
      .fbMessenger({
        botName: 'Alarmbots',
        botLogoUrl: 'https://botpreview.com/api/image/wH4W',
        displayedTime: hour(now),
        leftUser: 'left',
        rightUser: 'right',
        locale: 'es',
        loop: true,
        displayedCarrier: ''
      })
      .fbMessenger('start', { delay: 0, timestamp: now })
      .fbMessenger('message', 'right', 'Hola', {
        delay: 500,
        timestamp: now
      })
      .fbMessenger('typingIndicator', { delay: 1000, timestamp: now })
      .fbMessenger(
        'message',
        'left',
        '¡Hola! Soy Alarmbots, un bot que compara gratis alarmas para hogar y negocio.',
        { delay: 500, timestamp: now }
      )
      .fbMessenger(
        'message',
        'left',
        'Con pocas preguntas, te daré la solución más adecuada a tus necesidades.',
        { delay: 500, timestamp: now }
      )
      .fbMessenger(
        'message',
        'left',
        'Con pocas preguntas, te daré la solución más adecuada a tus necesidades.',
        { delay: 500, timestamp: now }
      )
      .fbMessenger('message', 'right', 'Una casa', {
        delay: 2000,
        timestamp: now
      })
      .fbMessenger('message', 'left', '¿Es la vivienda donde resides?', {
        delay: 500,
        timestamp: now
      })
      .fbMessenger('message', 'right', 'Si', { delay: 2000, timestamp: now })
      .fbMessenger('typingIndicator', { delay: 1000, timestamp: now })
      .fbMessenger('message', 'left', '¿Cuántos metros cuadrados tiene?', {
        delay: 500,
        timestamp: now
      })
      .fbMessenger('message', 'right', '90', { delay: 2000, timestamp: now })
      .fbMessenger('typingIndicator', { delay: 1000, timestamp: now })
      .fbMessenger('message', 'left', '¿Cuál es el tu código postal?', {
        delay: 500,
        timestamp: now
      })
      .fbMessenger('message', 'right', '08520', {
        delay: 2000,
        timestamp: now
      });
  }

  onChange(isVisible) {
    if (isVisible && this.$el && !this.state.isActive) {
      this.setState({ isActive: true });
      this.$el.fbMessenger('run');
    }
  }

  render() {
    return (
      <div id="chatbot-content">
        <VisibilitySensor onChange={(isVisible) => this.onChange(isVisible)} />
        <div id="chatbot">
          <div className="finger" />
          <div className="screen-content" ref={(el) => (this.el = el)} />
        </div>
      </div>
    );
  }
}
