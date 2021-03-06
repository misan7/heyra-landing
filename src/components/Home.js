import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Typist from "react-typist";
import Social, { bots, btn } from "./Social";
import "react-typist/dist/Typist.css";

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
    /* const network = btn("whatsapp"); */

    let typeTitle =
      "El bot que compara gratis alarmas para hogar o negocio desde tu";
    let typeColor = "#8A817A";

    switch (type) {
      case "business":
        typeTitle = "El bot que compara gratis alarmas para tu negocio desde";
        typeColor = "#E2E0D1";
        break;
    }

    return (
      <section id="home" className="s-home target-section">
        <Helmet>
          <meta name="description" content={`${typeTitle} Whatsapp`} />
          <meta name="theme-color" content={typeColor} />>
          <meta property="og:image" content={`/images/thumb-${type}.jpg`} />
        </Helmet>

        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>{title}</h3>
            <h1 className="home-title">{title}</h1>
            {/* <div className="home-content__buttons">
              <a href={network.link} className={`${network.name} contact btn`}>
                Comienza a chatear
              </a>
              <a
                href="#services"
                className="moreabout smoothscroll btn btn--stroke"
              >
                Saber más
              </a>
            </div> */}
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
