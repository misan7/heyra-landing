import React from "react";
import PropTypes from "prop-types";
import { bots } from "./Social";

const Networks = () => {
  const botItems = bots();

  return (
    <section id="clients" className="s-clients">
      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">¿QUIÉN SOY?</h3>
          <h1 className="display-2">
            Hola, me llamo Heyra, encantada de conocerte
          </h1>
          <h4>
            Voy a ser tu asistente personal, estoy dotada de inteligencia
            artificial y mi propósito es ayudarte a conocer gente cómo tú.
          </h4>
          <h4>
            Te voy a escuchar y a conocer, ¡estoy impaciente por hablar contigo!
            Puedo buscarte un restaurante y reservar una mesa para ti y tu
            match, tengo mis contactos ¿sabes? Solamente necesito conocer tus
            gustos.
          </h4>
        </div>
      </div>

      <div
        className={`row about-stats stats
          block-1-2
          block-m-1-1 block-mob-full`}
        data-aos="fade-up"
      >
        {bots().map(bot => (
          <div key={bot.name} className="col-block stats__col ">
            <a
              href={bot.link}
              title="true"
              style={{ fontSize: "20pt" }}
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
