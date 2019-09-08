import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Post from 'components/Post';
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';

function IndexRoute({
  data: {
    allMarkdownRemark: { edges: posts },
    site: {
      siteMetadata: { title, subtitle },
    },
  },
  data,
}) {
  return (
    <Layout>
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar data={data} />
        <div className="content">
          <div className="content__inner">
            {posts.map(post => (
              <Post data={post} key={post.node.fields.slug} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          twitter
          github
          rss
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
