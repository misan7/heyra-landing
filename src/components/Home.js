import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import Background from '../img/hero-bg.jpg';
import Social from './Social';

class Home extends Component {
  _onReady({ target }) {
    target.playVideo();
    target.mute();
  }

  _onEnd({ target }) {
    target.playVideo();
  }

  render() {
    const { title, slogan, backgroundVideo } = this.props;

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
              videoId={backgroundVideo}
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
            <h3>{title}</h3>
            <h1>{slogan}</h1>
            <div className="home-content__buttons">
              <a
                href="https://api.whatsapp.com/send?phone=34699914244&text="
                className="contact smoothscroll btn"
              >
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
        <Social className="home-social" />
      </section>
    );
  }
}

Home.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
  backgroundVideo: PropTypes.string
};

export default Home;
