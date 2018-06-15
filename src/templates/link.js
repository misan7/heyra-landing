import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { btn } from '../components/Social';

export const LinkTemplate = ({ title, name, link }) => {
  return (
    <section className="s-page">
      <Helmet
        bodyAttributes={{
          onload: `window.location='${link}'`
        }}
      >
        <meta http-equiv="refresh" content={`"0; url=${link}"`} />
      </Helmet>
      <div className="row section-header has-bottom-sep">
        <div className="col-full">
          <h3 className="subhead">chatbot</h3>
          <h1 className="display-2">{title}</h1>
          <p>
            Si has llegado hasta aquí, es por que quieres chatear mediante{' '}
            {name}
          </p>
        </div>
      </div>
      <div className="row section-header">
        <a href={link} className="contact btn">
          Empezar a chatear
        </a>
      </div>
    </section>
  );
};

LinkTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

const Link = ({ data }) => {
  const { markdownRemark: post } = data;
  const link = btn(post.frontmatter.name).link;

  return (
    <LinkTemplate
      title={post.frontmatter.title}
      link={link}
      name={post.frontmatter.name}
    />
  );
};

Link.propTypes = {
  data: PropTypes.object.isRequired
};

export default Link;

export const linkLinkQuery = graphql`
  query Link($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        name
      }
    }
  }
`;
