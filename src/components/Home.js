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
    typing: false,
    typing2: false
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
    console.log('Done!');
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };

  done2 = () => {
    console.log('Done 2!');
    this.setState({ typing2: false }, () => {
      this.setState({ typing2: true });
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
          <div
            className="row home-content__main"
            style={{ textAlign: 'center', paddingTop: '10rem' }}
          >
            <h1 style={{ fontSize: '80pt' }}>
              {!this.state.typing2 && (
                <Typist
                  startDelay={2000}
                  avgTypingDelay={60}
                  onTypingDone={this.done}
                  cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
                >
                  Compara sistemas de alarma para hogar o negocio desde tu{' '}
                </Typist>
              )}

              {!this.state.typing2 &&
                this.state.typing && (
                  <Typist avgTypingDelay={60} onTypingDone={this.done2}>
                    {bots().map((bot) => (
                      <span key={bot.class} className={bot.class}>
                        <a style={{ color: bot.color }} href={bot.link()}>
                          {bot.title}
                        </a>
                        <Typist.Delay ms={1500} />
                        <Typist.Backspace
                          count={bot.title.length}
                          delay={200}
                        />
                      </span>
                    ))}
                  </Typist>
                )}

              {this.state.typing2 && (
                <Typist avgTypingDelay={60} cursor={{ show: false }}>
                  <div style={{ paddingTop: '15rem' }}>
                    <span
                      style={{
                        fontSize: '180pt',
                        fontFamily: 'Hind Guntur',
                        letterSpacing: '-2px',
                        lineHeight: '0'
                      }}
                    >
                      Alarm<span style={{ color: '#39B54A' }}>bots.</span>
                    </span>
                    <Typist.Delay ms={500} />
                    <p
                      style={{
                        fontSize: '50pt'
                      }}
                    >
                      Inicia la experiencia
                    </p>
                  </div>
                </Typist>
              )}
            </h1>
            {/* <div className="home-content__buttons">
              <a href="#clients" className="contact smoothscroll btn">
                Inicia la experiencia
              </a>
              <a
                href="#about"
                className="moreabout smoothscroll btn btn--stroke"
              >
                Saber más
              </a>
            </div> */}
          </div>
          {/* <div className="home-content__scroll">
            <a href="#services" className="scroll-link smoothscroll">
              <span>Aún hay más</span>
            </a>
          </div>
          <div className="home-content__line" /> */}
        </div>
        {/* <Social className="home-social" /> */}
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
