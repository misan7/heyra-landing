import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import Image from 'gatsby-image';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import Typist from 'react-typist';
import Social, { bots } from './Social';
import 'react-typist/dist/Typist.css';

class Home extends Component {
  state = {
    typing: false
  };

  _onReady({ target }) {
    target.mute();
    target.playVideo();
  }

  _onEnd({ target }) {
    target.mute();
    target.playVideo();
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };

  render() {
    const { title, slogan, background, backgroundVideo } = this.props;

    return (
      <section id="home" className="s-home target-section">
        <BrowserView device={isBrowser}>
          <div className="video-background">
            <div className="video-foreground">
              <YouTube
                videoId={backgroundVideo}
                opts={{
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 1,
                    controls: 0,
                    loop: 1,
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
        </BrowserView>
        <MobileView device={isMobile} />
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
<<<<<<< HEAD
            <h3> {title} </h3> <h1> {slogan} </h1>
            <div className="home-content__buttons">
              <a
                href="https://api.whatsapp.com/send?phone=34699914244&text=Hola"
                className="contact smoothscroll btn"
=======
            <h3>{title}</h3>
            <h1>
              <Typist
                startDelay={2000}
                onTypingDone={this.done}
                cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
>>>>>>> 68d805669d7de265536de7b2e6da4254c9346776
              >
                Usa la Inteligencia Artificial para comparar alarmas desde tu{' '}
              </Typist>

              {this.state.typing && (
                <Typist avgTypingSpeed={40} onTypingDone={this.done}>
                  {bots().map((bot) => (
                    <span className={bot.class}>
                      <a style={{ color: bot.color }} href={bot.link}>
                        {bot.title}
                      </a>
                      <Typist.Delay ms={2500} />
                      <Typist.Backspace count={bot.title.length} delay={200} />
                    </span>
                  ))}
                </Typist>
              )}
            </h1>
            <div className="home-content__buttons">
              <a href="#clients" className="contact smoothscroll btn">
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
<<<<<<< HEAD
            <a href="#about" className="scroll-link smoothscroll">
              <span> Aún hay más </span>
=======
            <a href="#services" className="scroll-link smoothscroll">
              <span>Aún hay más</span>
>>>>>>> 68d805669d7de265536de7b2e6da4254c9346776
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
  backgroundVideo: PropTypes.string,
  background: PropTypes.object
};

export default Home;
