import React from "react";
import PropTypes from "prop-types";

const range = (min, max) => Math.round(min + Math.random() * (max - min));

const Statistics = ({
  title,
  subtitle,
  firstDescription,
  secDescription,
  totals
}) => (
  <section id="about" className="s-about">
    <div className="row section-header has-bottom-sep" data-aos="fade-up">
      <div className="col-full">
        <h3 className="subhead subhead--dark">{title}</h3>
        <h1 className="display-1 display-1--light">{subtitle}</h1>
      </div>
    </div>
    <div className="row about-desc" data-aos="fade-up">
      <div className="col-full">
        <p>{firstDescription}</p>
      </div>
      <div className="col-full">
        <p>{secDescription}</p>
      </div>
    </div>
    {/* <div
      className="row about-stats stats block-1-3 block-m-1-2 block-mob-full"
      data-aos="fade-up"
    >
      <div className="col-block stats__col ">
        <div className="stats__count">{(totals && totals.business) || 12}</div>
        <h5>Empresas analizadas</h5>
      </div>
      <div className="col-block stats__col">
        <div className="stats__count">
          {(totals && totals.analyzed) || 7223}
        </div>
        <h5>Clientes analizados</h5>
      </div>
      <div className="col-block stats__col">
        <div className="stats__count">
          {(totals && totals.protected) || 2980}
        </div>
        <h5>Clientes protegidos</h5>
      </div>
    </div> */}
    <div className="about__line" />
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  firstDescription: PropTypes.string,
  totals: PropTypes.shape({
    business: PropTypes.number,
    analyzed: PropTypes.number,
    protected: PropTypes.number
  })
};

export default Statistics;
