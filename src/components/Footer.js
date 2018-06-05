import React from 'react';
import NetlifyForm from 'react-netlify-form';
import Link from 'gatsby-link';

import Logo from '../img/logo.svg';

const Footer = () => (
  <footer>
    <div className="row footer-main">
      <div className="col-six tab-full left footer-desc">
        <img className="footer-logo" src={Logo} />
        La Inteligencia Artificial que busca la mejor opción para proteger tu
        hogar y negocio
      </div>

      <NetlifyForm name="Callme">
        {(formState) => (
          <div className="col-six tab-full right footer-subscribe">
            <h4>¿Te llamamos?</h4>
            <p>
              Si prefieres hablar con un humano, tenemos alguno a tu disposición
            </p>
            {!formState.success && (
              <div className="subscribe-form">
                <div id="mc-form" className="group">
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Número de teléfono"
                    required
                  />
                  <input type="submit" name="subscribe" value="Llámame" />
                  <label htmlFor="mc-email" className="subscribe-message" />
                </div>
              </div>
            )}
            {formState.error && (
              <div className="message-warning">
                Se ha producido un error. Vuelve a intentarlo.
              </div>
            )}
            {formState.success && (
              <div className="message-success">
                Tu mensaje ha sido recibido. Muchas gracias.
              </div>
            )}
          </div>
        )}
      </NetlifyForm>
    </div>

    <div className="row footer-bottom">
      <div className="col-six">
        <span>Creado con ❤️por BotSpecialist</span>
      </div>

      <div className="col-six">
        <span>
          <Link to="/">Inicio</Link>
        </span>
        {'  |  '}
        <span>
          <Link to="/page/privacy-web">
            Política de privacidad y Aviso Legal
          </Link>
        </span>
        {/* <div className="go-top" style={{ display: 'block' }}>
          <a className="smoothscroll" title="Back to Top" href="#top">
            <i className="icon-arrow-up" aria-hidden="true" />
          </a>
        </div> */}
      </div>
    </div>
  </footer>
);

export default Footer;
