import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'gatsby-link';

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
            <span>Close</span>
          </a>
          <div className="header-nav__content">
            <h3>Navigation</h3>
            <ul className="header-nav__list">
              <li className="current">
                <Link to="/" onClick={() => this.toggle()}>
                  <span className="smoothscroll">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => this.toggle()}>
                  <span className="smoothscroll">About</span>
                </Link>
              </li>
            </ul>
            <p>
              Perspiciatis hic praesentium nesciunt. Et neque a dolorum{' '}
              <a href="#0">voluptatem</a> porro iusto sequi veritatis libero
              enim. Iusto id suscipit veritatis neque reprehenderit.
            </p>
            <ul className="header-nav__social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
            </ul>
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
