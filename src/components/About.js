import React from 'react';
import PropTypes from 'prop-types';

const range = (min, max) => Math.round(min + Math.random() * (max - min));

const About = () => (
  <section id="about" className="s-about">
    <div className="row section-header has-bottom-sep" data-aos="fade-up">
      <div className="col-full">
        <h3 className="subhead subhead--dark">Somos</h3>
        <h1 className="display-1 display-1--light">AlarmBots</h1>
      </div>
    </div>
    <div className="row about-desc" data-aos="fade-up">
      <div className="col-full">
        <p>
          La inteligencia artificial que busca la mejor opción para proteger tu
          hogar y negocio
        </p>
      </div>
    </div>
    <div
      className="row about-stats stats block-1-3 block-m-1-2 block-mob-full"
      data-aos="fade-up"
    >
      <div className="col-block stats__col ">
        <div className="stats__count">12</div>
        <h5>Empresas analizadas</h5>
      </div>
      <div className="col-block stats__col">
        <div className="stats__count">7223</div>
        <h5>Clientes analizados</h5>
      </div>
      <div className="col-block stats__col">
        <div className="stats__count">2980</div>
        <h5>Clientes protegidos</h5>
      </div>
    </div>
    <div className="about__line" />
  </section>
);

About.propTypes = {};

export default About;
