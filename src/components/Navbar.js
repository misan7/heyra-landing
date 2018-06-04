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
    const { isHome } = this.props;

    console.log(isHome);

    return (
      <header
        className={classNames('s-header', { 'menu-is-open': this.state.show })}
      >
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src={Logo} alt="Homepage" />
          </a>
        </div>
        {isHome && (
          <div>
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
                    <a
                      href="#top"
                      className="smoothscroll"
                      onClick={() => this.toggle()}
                    >
                      <span>Inicio</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="smoothscroll"
                      onClick={() => this.toggle()}
                    >
                      <span>Somos</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="smoothscroll"
                      onClick={() => this.toggle()}
                    >
                      <span>La mejor opción</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="smoothscroll"
                      onClick={() => this.toggle()}
                    >
                      <span>Contacto</span>
                    </a>
                  </li>
                </ul>
                <p>
                  Si deseas conocer más sobre nosotros, visita nuestros perfiles
                  en las redes sociales
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
          </div>
        )}
      </header>
    );
  }
}

export default Navbar;
