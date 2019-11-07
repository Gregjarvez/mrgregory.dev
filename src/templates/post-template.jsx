import React from 'react';
import { graphql } from 'gatsby';
import SEO from 'components/Seo';
import Layout from '../components/Layout';
import PostTemplateDetails from '../components/PostTemplateDetails';

function PostTemplate({
  data: {
    site: {
      siteMetadata: { title, subtitle },
    },
    markdownRemark: post,
  },
  data,
}) {
  const { title: postTitle, description: postDescription } = post.frontmatter;
  const description = postDescription !== null ? postDescription : subtitle;
  const ogImage =
    post.frontmatter.featuredImage && post.frontmatter.featuredImage.publicURL;

  return (
    <Layout>
      <div>
        <SEO
          image={ogImage}
          description={description}
          title={`${postTitle} - ${title}`}
        />
        <PostTemplateDetails data={data} />
      </div>
    </Layout>
  );
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          name
          twitter
        }
        disqusShortname
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        tags
        date
        description
        featuredImage {
          publicURL
        }
      }
    }
  }
`;
