import React from 'react';
import PropTypes from 'prop-types';
import { bots } from './Social';

const Networks = () => {
  const botItems = bots();

  return (
    <section id="clients" className="s-clients">
      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">El Chatbot que compara alarmas </h3>
          <h1 className="display-2">
            El chat inteligente que compara alarmas para hogar o negocio
          </h1>
          <h3>Selecciona la aplicación de mensajería que usas habitualmente</h3>
        </div>
      </div>

      <div
        className={`row about-stats stats
          block-1-2
          block-m-1-1 block-mob-full`}
        data-aos="fade-up"
      >
        {bots().map((bot) => (
          <div key={bot.name} className="col-block stats__col ">
            <a
              href={bot.link}
              title="true"
              style={{ fontSize: '20pt' }}
              className={`${bot.name} btn btn--stroke`}
            >
              <i className={`fab fa-${bot.name}`} />
              <span>{` ${bot.title}`}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

Networks.propTypes = {};

export default Networks;
