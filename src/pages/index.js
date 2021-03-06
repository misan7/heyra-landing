import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import Home from "../components/Home";
import About from "../components/About";
import Statistics from "../components/Statistics";
import Works from "../components/Works";
import Networks from "../components/Networks";
import Contact from "../components/Contact";

export default class IndexPage extends React.Component {
  render() {
    const { location, data } = this.props;

    const {
      allMarkdownRemark: { edges: posts },
      site: {
        siteMetadata: { slogan, subtitle, about }
      }
    } = data;

    const type = (location.search && location.search.substr(1)) || "none";

    return (
      <div>
        <Home title={subtitle} slogan={slogan} type={type} />
        <About />
        <Statistics {...about} />
        {/* <Networks type={type} /> */}
        {/* <Contact /> */}
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    }),
    site: PropTypes.object
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        slogan
        subtitle
        about {
          title
          subtitle
          firstDescription
          secDescription
          totals {
            business
            analyzed
            protected
          }
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
