import React from 'react';
import { graphql } from 'gatsby';
import SEO from 'components/Seo';
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import TagTemplateDetails from 'components/TagTemplateDetails';

function TagTemplate(props) {
  const { tag } = props.pageContext;
  const { title } = props.data.site.siteMetadata;

  return (
    <Layout>
      <div>
        <SEO title={`All Posts tagged as "${tag}" - ${title}`} />
        <Sidebar data={props.data} />
        <TagTemplateDetails data={props.data} pageContext={props.pageContext} />
      </div>
    </Layout>
  );
}

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
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
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          layout: { eq: "post" }
          draft: { ne: true }
        }
      }
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
