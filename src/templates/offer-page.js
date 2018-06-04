import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import atob from 'atob';
import groupBy from 'lodash/groupBy';

import { networks } from '../components/Social';

export const OfferPageTemplate = ({
  user,
  url,
  title,
  subtitle,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
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
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const OfferPage = ({ location, data }) => {
  const { markdownRemark: post } = data;
  const user = JSON.parse(atob(location.search.substring(1)));

  let url = groupBy(networks, 'class')[user.platform][0].link(
    'Si, quiero una visita'
  );

  return (
    <OfferPageTemplate
      contentComponent={HTMLContent}
      user={user}
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
