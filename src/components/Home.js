import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

import Background from '../img/hero-bg.jpg';

class Home extends Component {
  render() {
    return (
      <section
        id="home"
        className="s-home target-section"
        data-parallax="scroll"
        data-natural-width={3000}
        data-natural-height={2000}
        data-position-y="center"
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 80
              },
              line_linked: {
                shadow: {
                  enable: false,
                  color: '#3CA9D1',
                  blur: 5
                }
              }
            }
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />

        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>El comparador inteligente</h3>
            <h1>
              Usa la Inteligencia Artificial
              <br /> para comparar alarmas
              <br /> desde tu WhatsApp
            </h1>
            <div className="home-content__buttons">
              <a href="#contact" className="contact smoothscroll btn">
                Inicia la experiencia
              </a>
              <a
                href="#about"
                className="moreabout smoothscroll btn btn--stroke"
              >
                Saber más
              </a>
            </div>
          </div>
          <div className="home-content__scroll">
            <a href="#about" className="scroll-link smoothscroll">
              <span>Aún hay más</span>
            </a>
          </div>
          <div className="home-content__line" />
        </div>
        <ul className="home-social">
          <li>
            <a href="#0">
              <i className="fa fa-whatsapp" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-facebook" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-twitter" aria-hidden="true" />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

Home.propTypes = {};

export default Home;
