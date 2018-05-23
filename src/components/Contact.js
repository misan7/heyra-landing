import React from 'react';
import PropTypes from 'prop-types';
import NetlifyForm from 'react-netlify-form';

import Social from './Social';

const Contact = () => (
  <section id="contact" className="s-contact">
    <div className="overlay" />
    <div className="contact__line" />
    <div className="row section-header" data-aos="fade-up">
      <div className="col-full">
        <h3 className="subhead">Contacto</h3>
        <h1 className="display-2 display-2--light">
          Si necesitas más información
        </h1>
      </div>
    </div>
    <div className="row contact-content" data-aos="fade-up">
      <div className="contact-primary">
        <NetlifyForm>
          {(formState) => (
            <div>
              {formState.loading && (
                <div className="message-loading">Espere...</div>
              )}
              {!formState.success && (
                <div>
                  <h3 className="h6">Envía un mensaje</h3>
                  <fieldset>
                    <div className="form-field">
                      <input
                        name="contactName"
                        type="text"
                        id="contactName"
                        placeholder="Tú nombre"
                        aria-required="true"
                        className="full-width"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <input
                        name="contactEmail"
                        type="email"
                        id="contactEmail"
                        placeholder="Tu E-Mail"
                        aria-required="true"
                        className="full-width"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <input
                        name="contactSubject"
                        type="text"
                        id="contactSubject"
                        placeholder="Asunto"
                        className="full-width"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <textarea
                        name="contactMessage"
                        id="contactMessage"
                        placeholder="El mensaje"
                        rows={10}
                        cols={50}
                        aria-required="true"
                        className="full-width"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <button className="full-width btn--primary">
                        Continuar
                      </button>
                    </div>
                  </fieldset>
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
      <div className="contact-secondary">
        <div className="contact-info">
          <h3 className="h6 hide-on-fullwidth">Información de contacto</h3>
          <div className="cinfo">
            <h5>Por e-mail</h5>
            <p>
              <a href="mailto:comercial@botspecialist.es">
                comercial@botspecialist.es
              </a>
            </p>
          </div>
          <div className="cinfo">
            <h5>Por teléfono</h5>
            <p>
              <a href="tel:675985062">(+34) 675 985 062</a>
            </p>
          </div>
          <Social className="contact-social" />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
