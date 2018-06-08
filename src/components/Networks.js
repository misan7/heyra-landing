import React from 'react';
import PropTypes from 'prop-types';
import { bots } from './Social';

const Networks = () => {
  const botItems = bots();

  return (
    <section id="clients" className="s-clients">
      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">El comparador inteligente</h3>
          <h1 className="display-2">
            El chatbot que compara alarmas para hogar o negocio
          </h1>
          <h3>
            Busca la mejor opción en base a tu perfil desde la aplicación de
            mensajería que usas habitualmente
          </h3>
        </div>
      </div>

      <div
        className={`row about-stats stats
          block-1-2
          block-m-1-1 block-mob-full`}
        data-aos="fade-up"
      >
        {bots().map((bot) => (
          <div key={bot.class} className="col-block stats__col ">
            <a
              href={bot.link}
              title="true"
              style={{ fontSize: '20pt' }}
              className={`${bot.class} btn btn--stroke`}
            >
              <i className={`fab fa-${bot.class}`} />
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
