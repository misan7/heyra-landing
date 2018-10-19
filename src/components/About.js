import React from "react";
import MobileChat from "./MobileChat";

const About = () => (
  <section id="services" className="s-services">
    <div className="row section-header has-bottom-sep" data-aos="fade-up">
      <div className="col-full">
        <h3 className="subhead">Encantada de conocerte</h3>
        <h1 className="display-2">Me llamo Heyra</h1>
      </div>
    </div>
    <div className="row services-list block-1-2 block-tab-full">
      <div className="col-block service-item" data-aos="fade-up">
        <div className="service-icon">
          <i className="icon-user-add" />
        </div>
        <div className="service-text">
          <h3 className="h2">Inteligente</h3>
          <p>
            Algunos tienen inteligencia emocional, yo con mi inteligencia
            artificial estoy segura que revolucionaré tu vida.
          </p>
        </div>
      </div>
      <div className="col-block service-item" data-aos="fade-up">
        <div className="service-icon">
          <i className="icon-juice" />
        </div>
        <div className="service-text">
          <h3 className="h2">¿Comemos juntos?</h3>
          <p>
            He reservado mesa para dos, aunque yo no puedo comer pero te
            acompaño a la mesa. ¿Te apetece?
          </p>
        </div>
      </div>
      <div className="col-block service-item" data-aos="fade-up">
        <div className="service-icon">
          <i className="icon-basket-ball" />
        </div>
        <div className="service-text">
          <h3 className="h2">Fácil uso</h3>
          <p>
            Realizaré todas las gestiones y cálculos necesarios para ponerte en
            contacto con las personas más compatibles contigo.
          </p>
        </div>
      </div>
      <div className="col-block service-item" data-aos="fade-up">
        <div className="service-icon">
          <i className="icon-earth" />
        </div>
        <div className="service-text">
          <h3 className="h2">Rápido</h3>
          <p>
            Organizo eventos con personas parecidas a ti en gustos para que
            ahorres tiempo.
          </p>
        </div>
      </div>
    </div>
    {/*     <div id="chatbot-wrapper" className="row" data-aos="fade-up">
      <MobileChat />
    </div> */}
  </section>
);

export default About;
