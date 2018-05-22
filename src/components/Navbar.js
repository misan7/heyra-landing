import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'gatsby-link';

import Social from './Social';
import Logo from '../img/logo.svg';

class Navbar extends Component {
  state = { show: false };

  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <header
        className={classNames('s-header', { 'menu-is-open': this.state.show })}
      >
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src={Logo} alt="Homepage" />
          </a>
        </div>
        <nav className="header-nav">
          <a
            href="#0"
            className="header-nav__close"
            title="close"
            onClick={() => this.toggle()}
          >
            <span>Cerrar</span>
          </a>
          <div className="header-nav__content">
            <h3>Navegación</h3>
            <ul className="header-nav__list">
              <li className="current">
                <a href="#top" onClick={() => this.toggle()}>
                  <span className="smoothscroll">Inicio</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => this.toggle()}>
                  <span className="smoothscroll">Somos</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => this.toggle()}>
                  <span className="smoothscroll">La mejor opción</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => this.toggle()}>
                  <span className="smoothscroll">Contacto</span>
                </a>
              </li>
            </ul>
            <p>
              Si deseas conocer más sobre nosotros, visita nuestros perfiles en
              las redes sociales
            </p>
            <Social className="header-nav__social" />
          </div>
        </nav>
        <a
          className="header-menu-toggle"
          href="#0"
          onClick={() => this.toggle()}
        >
          <span className="header-menu-text">Menu</span>
          <span className="header-menu-icon" />
        </a>
      </header>
    );
  }
}

export default Navbar;
