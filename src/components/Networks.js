import React from 'react';
import PropTypes from 'prop-types';
import { bots } from './Social';

const Networks = () => (
  <section id="clients" className="s-clients">
    <div className="row section-header" data-aos="fade-up">
      <div className="col-full">
        <h3 className="subhead">Los chatbots</h3>
        <h1 className="display-2">
          La mejor experiencia, en cualquier plataforma
        </h1>
      </div>
    </div>

    <div
      className="row about-stats stats block-1-3 block-m-1-2 block-mob-full"
      data-aos="fade-up"
    >
      {bots().map((bot) => (
        <div key={bot.class} className="col-block stats__col ">
          <a
            href={bot.link}
            title="true"
            className={`clients__slide ${bot.class}`}
          >
            <i className={`fa fa-${bot.class}`} />
          </a>
        </div>
      ))}
    </div>
  </section>
);

Networks.propTypes = {};

export default Networks;
