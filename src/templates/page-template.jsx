import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import PageTemplateDetails from 'components/PageTemplateDetails';

function PageTemplate({
  data: {
    markdownRemark: {
      frontmatter: { title: pageTitle, description: pageDescription },
    },
    site: {
      siteMetadata: { title, subtitle },
    },
  },
  data,
}) {
  const description = pageDescription !== null ? pageDescription : subtitle;

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${pageTitle} - ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        <PageTemplateDetails data={data} />
      </div>
    </Layout>
  );
}

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
