import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import CategoryTemplateDetails from 'components/CategoryTemplateDetails';

function CategoryTemplate({ data, pageContext }) {
  const { title } = data.site.siteMetadata;

  return (
    <Layout>
      <div>
        <SEO title={`${pageContext.category} - ${title}`} />
        <Sidebar data={data} />
        <CategoryTemplateDetails data={data} pageContext={pageContext} />
      </div>
    </Layout>
  );
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
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
          category: { eq: $category }
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
