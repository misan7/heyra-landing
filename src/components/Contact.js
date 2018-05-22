import React from 'react';
import PropTypes from 'prop-types';

import Social from './Social';

class Contact extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => navigateTo('/thanks/'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  render() {
    return (
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
            <h3 className="h6">Envía un mensaje</h3>
            <form
              name="contactForm"
              id="contactForm"
              method="post"
              action="true"
              noValidate="novalidate"
            >
              <fieldset>
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Tú nombre"
                    defaultValue
                    required
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Tu E-Mail"
                    defaultValue
                    required
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactSubject"
                    type="text"
                    id="contactSubject"
                    placeholder="Asunto"
                    defaultValue
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="El mensaje"
                    rows={10}
                    cols={50}
                    required
                    aria-required="true"
                    className="full-width"
                    defaultValue={''}
                  />
                </div>
                <div className="form-field">
                  <button className="full-width btn--primary">Continuar</button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            <div className="message-warning">
              Something went wrong. Please try again.
            </div>
            <div className="message-success">
              Your message was sent, thank you!
              <br />
            </div>
          </div>
          <div className="contact-secondary">
            <div className="contact-info">
              <h3 className="h6 hide-on-fullwidth">Contact Info</h3>
              <div className="cinfo">
                <h5>Where to Find Us</h5>
                <p>
                  1600 Amphitheatre Parkway
                  <br /> Mountain View, CA
                  <br /> 94043 US
                </p>
              </div>
              <div className="cinfo">
                <h5>Email Us At</h5>
                <p>
                  contact@glintsite.com
                  <br /> info@glintsite.com
                </p>
              </div>
              <div className="cinfo">
                <h5>Call Us At</h5>
                <p>
                  Phone: (+63) 555 1212
                  <br /> Mobile: (+63) 555 0100
                  <br /> Fax: (+63) 555 0101
                </p>
              </div>
              <Social className="contact-social" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {};

export default Contact;
