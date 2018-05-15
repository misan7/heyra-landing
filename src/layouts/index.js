import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
  <div id="W
    rapper">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div id="Content"> {children()} </div>
    <Footer />
    <div id="preloader">
      <div id="loader">
        <div className="line-scale-pulse-out">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
