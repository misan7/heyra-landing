import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

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
    const { title, slogan, background, backgroundVideo, type } = this.props;

    let typeTitle = 'Compara gratis alarmas para hogar o negocio desde tu';
    let typeColor = '#8A817A';

    switch (type) {
      case 'business':
        typeTitle = 'Compara gratis alarmas para tu negocio desde';
        typeColor = '#E2E0D1';
        break;
    }

    return (
      <section id="home" className="s-home target-section">
        <Helmet>
          <meta name="description" content={`${typeTitle} Whatsapp`} />
          <meta name="theme-color" content={typeColor} />>
          <meta property="og:image" content={`/images/thumb-${type}.jpg`} />
        </Helmet>

        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>{title}</h3>
            <h1 className="home-title">
              <Typist
                startDelay={2000}
                onTypingDone={this.done}
                cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
              >
                {typeTitle}
              </Typist>

              {this.state.typing && (
                <Typist avgTypingSpeed={40} onTypingDone={this.done}>
                  {bots(type).map((bot) => (
                    <span key={bot.class} className={bot.class}>
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
                href="#services"
                className="moreabout smoothscroll btn btn--stroke"
              >
                Saber más
              </a>
            </div>
          </div>
          <div className="home-content__scroll">
            <a href="#services" className="scroll-link smoothscroll">
              <span>Aún hay más</span>
            </a>
          </div>
          <div className="home-content__line" />
        </div>
        <Social className="home-social" type={type} />
      </section>
    );
  }
}

Home.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
  backgroundVideo: PropTypes.string,
  background: PropTypes.object,
  type: PropTypes.string
};

export default Home;
