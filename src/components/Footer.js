import React from 'react';

import Logo from '../img/logo.svg';

const Footer = () => (
  <footer>
    <div className="row footer-main">
      <div className="col-six tab-full left footer-desc">
        <img className="footer-logo" src={Logo} />
        La Inteligencia Artificial que busca la mejor opción para proteger tu
        hogar y negocio
      </div>
      <div className="col-six tab-full right footer-subscribe">
        <h4>Get Notified</h4>
        <p>
          Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut
          non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto
          porro.
        </p>

        <div className="subscribe-form">
          <form id="mc-form" className="group" novalidate="true">
            <input
              type="email"
              value=""
              name="EMAIL"
              className="email"
              id="mc-email"
              placeholder="Email Address"
              required=""
            />
            <input type="submit" name="subscribe" value="Subscribe" />
            <label for="mc-email" className="subscribe-message" />
          </form>
        </div>
      </div>
    </div>

    <div className="row footer-bottom">
      <div className="col-twelve">
        <div className="copyright">
          <span>Hecho con ❤️por BotSpecialist</span>
        </div>

        <div className="go-top" style={{ display: 'block' }}>
          <a className="smoothscroll" title="Back to Top" href="#top">
            <i className="icon-arrow-up" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
