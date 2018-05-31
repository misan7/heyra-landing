import React from 'react';
import PropTypes from 'prop-types';

const About = () => (
  <section id="services" className="s-services">
    <div className="row section-header has-bottom-sep" data-aos="fade-up">
      <div className="col-full">
        <h3 className="subhead">La mejor opción</h3>
        <h1 className="display-2">Lo que necesitas para protegerte</h1>
      </div>
    </div>
    <div className="row services-list block-1-2 block-tab-full">
      <div className="col-block service-item" data-aos="fade-up">
        <div className="service-icon">
          <i className="icon-paint-brush" />
        </div>
        <div className="service-text">
          <h3 className="h2">Inteligente</h3>
          <p>
            Nuestros robots rastrean y analizan múltiples alternativas para
            ofrecerte la opción apropiada en base a tu perfil.
          </p>
        </div>
      </div>
      <div className="col-block service-item" data-aos="fade-up">
        <div className="service-icon">
          <i className="icon-group" />
        </div>
        <div className="service-text">
          <h3 className="h2">Económico</h3>
          <p>
            Nuestra red de colaboradores te ofrecerán la opción elegida al
            precio más competitivo del mercado.
          </p>
        </div>
      </div>
      <div className="col-block service-item" data-aos="fade-up">
        <div className="service-icon">
          <i className="icon-megaphone" />
        </div>
        <div className="service-text">
          <h3 className="h2">Fácil</h3>
          <p>
            Realizamos todas las gestiones necesarias para ponerte en contacto
            con la compañía que más se adapta a tus necesidades.
          </p>
        </div>
      </div>
      <div className="col-block service-item" data-aos="fade-up">
        <div className="service-icon">
          <i className="icon-earth" />
        </div>
        <div className="service-text">
          <h3 className="h2">Rápido</h3>
          <p>
            Unas simples preguntas mediante WhatsApp, y tendré todo lo necesario
            para asesorarte.
          </p>
        </div>
      </div>
    </div>
  </section>
);

About.propTypes = {};

export default About;
