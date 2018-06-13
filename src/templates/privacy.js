import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import atob from 'atob';
import { btn } from '../components/Social';

export const PrivacyTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
  url
}) => {
  const PrivacyContent = contentComponent || Content;
  return (
    <section className="s-page">
      <div className="row section-header has-bottom-sep">
        <div className="col-full">
          <h3 className="subhead">{subtitle}</h3>
          <h1 className="display-2">{title}</h1>
          <PrivacyContent content={content} />
        </div>
      </div>
      <div className="row section-header">
        <a href={url} className="contact smoothscroll btn">
          Acepto las condiciones
        </a>
      </div>
    </section>
  );
};

PrivacyTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  url: PropTypes.string
};

const Privacy = ({ data }) => {
  const { markdownRemark: post } = data;
  const parameters = JSON.parse(atob(location.search.substring(1)));

  return (
    <PrivacyTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      content={post.html}
      url={btn(parameters.platform, 'accept').link}
    />
  );
};

Privacy.propTypes = {
  data: PropTypes.object.isRequired
};

export default Privacy;

export const privacyPageQuery = graphql`
  query Privacy($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
