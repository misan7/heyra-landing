import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import atob from 'atob';
import groupBy from 'lodash/groupBy';

import { networks } from '../components/Social';

export const OfferPageTemplate = ({
  url,
  title,
  subtitle,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Descuento promocional" />
        <meta
          property="og:description"
          content="Descuento sólo hasta el 30 de junio de 2018"
        />
        <meta
          property="og:image"
          content="https://alarmbots.com/images/promotion.jpg"
        />
        <meta name="theme-color" content="#18374f" />>
      </Helmet>
      <section id="home" className="s-home s-offer target-section">
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>Tú oferta</h3>
            <h1>Descuento promocional</h1>
            <h1 className="discount">-499€</h1>
            <h3>Descuento sólo hasta el 30 de junio de 2018</h3>
          </div>
          <div className="home-content__scroll">
            <a href="#services" className="scroll-link smoothscroll">
              <span>Aún hay más</span>
            </a>
          </div>
          <div className="home-content__line" />
        </div>
      </section>
      <section className="s-page">
        <div className="row section-header has-bottom-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">{subtitle}</h3>
            <h1 className="display-2">{title}</h1>
            <PageContent content={content} />
          </div>
        </div>
        <div className="row section-header" data-aos="fade-up">
          <a href={url} className="contact smoothscroll btn">
            Solicita una visita
          </a>
        </div>
      </section>
    </div>
  );
};

OfferPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const OfferPage = ({ location, data }) => {
  const { markdownRemark: post } = data;

  if (!location.search) {
    return <div />;
  }

  const user = JSON.parse(atob(location.search.substring(1)));

  if (!user) {
    return <div />;
  }

  const platform = user.platform || 'whatsapp';
  const url = groupBy(networks, 'class')[platform][0].link(
    'Si, quiero una visita'
  );

  return (
    <OfferPageTemplate
      contentComponent={HTMLContent}
      url={url}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      content={post.html}
    />
  );
};

OfferPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default OfferPage;

export const offerPageQuery = graphql`
  query OfferPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
