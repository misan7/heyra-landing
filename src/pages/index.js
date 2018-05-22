import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import Clients from '../components/Clients';
import Contact from '../components/Contact';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      allMarkdownRemark: { edges: posts },
      site: {
        siteMetadata: { slogan, subtitle, backgroundVideo, about }
      }
    } = data;

    return (
      <div>
        <Home
          title={subtitle}
          slogan={slogan}
          backgroundVideo={backgroundVideo}
        />
        <About {...about} />
        <Services />
        {/* <Works />
        <Clients /> */}
        <Contact />
      </div>
    );

    // return (
    //   <section className="section">
    //     <div className="container">
    //       <div className="content">
    //         <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
    //       </div>
    //       {posts
    //         .filter((post) => post.node.frontmatter.templateKey === 'blog-post')
    //         .map(({ node: post }) => (
    //           <div
    //             className="content"
    //             style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
    //             key={post.id}
    //           >
    //             <p>
    //               <Link className="has-text-primary" to={post.fields.slug}>
    //                 {post.frontmatter.title}
    //               </Link>
    //               <span> &bull; </span>
    //               <small>{post.frontmatter.date}</small>
    //             </p>
    //             <p>
    //               {post.excerpt}
    //               <br />
    //               <br />
    //               <Link className="button is-small" to={post.fields.slug}>
    //                 Keep Reading →
    //               </Link>
    //             </p>
    //           </div>
    //         ))}
    //     </div>
    //   </section>
    // );
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
        backgroundVideo
        about {
          title
          subtitle
          description
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
