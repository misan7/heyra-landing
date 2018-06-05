import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TemplateWrapper = ({
  children,
  location,
  data: {
    site: {
      siteMetadata: { title, subtitle, slogan }
    }
  }
}) => (
  <div id="Wrapper">
    <Helmet title={subtitle} titleTemplate={`%s - ${title}`}>
      <meta name="description" content={slogan} />
      <meta name="theme-color" content="#070708" />>
      <link
        rel="icon"
        type="image/png"
        href="images/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="images/favicon-16x16.png"
        sizes="16x16"
      />
    </Helmet>
    {/* <Navbar isHome={location.pathname === '/'} /> */}
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
  children: PropTypes.func,
  data: PropTypes.object
};

export default TemplateWrapper;

export const TemplateWrapperQuery = graphql`
  query TemplateWrapperQuery {
    site {
      siteMetadata {
        title
        subtitle
        slogan
      }
    }
  }
`;
