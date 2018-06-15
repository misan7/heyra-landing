import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { btn } from '../components/Social';

export const LinkTemplate = ({ title, link }) => {
  return (
    <section className="s-link">
      <Helmet
        bodyAttributes={{
          onload: `window.location='${link}'`
        }}
      >
        <meta http-equiv="refresh" content={`"0; url=${link}"`} />
      </Helmet>
      <div className="row section-header has-bottom-sep">
        <div className="col-full">
          <h3 className="subhead">{link}</h3>
          <h1 className="display-2">{title}</h1>
        </div>
      </div>
    </section>
  );
};

LinkTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

const Link = ({ data }) => {
  const { markdownRemark: post } = data;
  const link = btn(post.frontmatter.name).link;

  return <LinkTemplate title={post.frontmatter.title} link={link} />;
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
