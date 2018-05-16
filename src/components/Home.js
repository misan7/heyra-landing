import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import Background from '../img/hero-bg.jpg';

class Home extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    console.log('Play!!');
    event.target.playVideo();
    event.target.mute();
  }

  _onEnd(event) {
    console.log('End!!');
    event.target.playVideo();
  }

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
        <div className="video-background">
          <div className="video-foreground">
            <YouTube
              videoId="aE9zjhlcmYI"
              opts={{
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                  controls: 0,
                  rel: 0,
                  showinfo: 0
                }
              }}
              className="video-iframe"
              onReady={this._onReady}
              onEnd={this._onEnd}
            />
          </div>
        </div>

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
