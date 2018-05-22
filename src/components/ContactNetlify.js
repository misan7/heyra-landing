import React from 'react';
import { navigateTo } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
      <section>
        <h2>Envíanos un mensaje</h2>
        <div className="row">
          <div className="col-lg-8">
            <form
              id="contact-form"
              className="default-form m-ajax-form"
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <p hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-field">
                    <label>
                      Nombre
                      <input
                        id="contact-name"
                        className="m-required"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>

                  <div className="form-field">
                    <label>
                      Email
                      <input
                        className="m-required m-email"
                        id="contact-email"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div className="form-field">
                    <label>
                      nº de Teléfono
                      <input
                        id="contact-phone"
                        type="number"
                        name="phone"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-field">
                    <label>
                      Asunto
                      <input
                        id="contact-subject"
                        name="subject"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div className="form-field">
                    <label>
                      Mensaje
                      <textarea
                        className="m-required"
                        id="contact-message"
                        name="message"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div className="form-field">
                    <button className="submit-btn c-button" type="submit">
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="c-icon-block">
              <i className="ico fa fa-info-circle" />
              <div className="icon-block-inner">
                <p>
                  Si tienes alguna duda o quieres realizar una reserva, no dudes
                  en escribirnos un mensaje para ponerte en contacto con
                  nosotros.
                </p>
                {/* <p>
                          <a
                            href="ajax/reservation-form.html"
                            className="c-button m-type-2 m-open-ajax-modal"
                          >
                            Make a Reservation
                          </a>
                        </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
