import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

export const OfferPageTemplate = ({
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
            <h3>{subtitle}</h3>
            <h1>{title}</h1>
          </div>
          <div className="home-content__line" />
        </div>
      </section>
      <section className="s-page">
        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">{subtitle}</h3>
            <h1 className="display-2">{title}</h1>
            <h2 className="display-2 discount">-449€</h2>
            <PageContent content={content} />
          </div>
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

  console.log(location);

  return (
    <OfferPageTemplate
      contentComponent={HTMLContent}
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
