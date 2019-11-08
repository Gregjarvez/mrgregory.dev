import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ meta, lang, description, title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            url
            author {
              name
              email
              twitter
              twitterUserName
              github
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: site.siteMetadata.url,
        },
        {
          property: 'og:title',
          content: title || site.siteMetadata.title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'blog',
        },
        {
          name: 'twitter:creator',
          content: `@${site.siteMetadata.author.twitterUserName}`,
        },
        {
          name: 'twitter:site',
          content: `@${site.siteMetadata.author.twitterUserName}`,
        },
        image && {
          name: 'og:image',
          content: image,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: site.siteMetadata.author.twitterUserName,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        image && {
          name: 'twitter:image',
          content: image,
        },
      ]
        .concat(meta)
        .filter(Boolean)}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
};

export default SEO;
