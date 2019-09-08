import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';

function CategoriesRoute({
  data: {
    site: {
      siteMetadata: { title },
    },
    allMarkdownRemark: { group: categories },
  },
  data,
}) {
  return (
    <Layout>
      <div>
        <Helmet title={`All Categories - ${title}`} />
        <Sidebar data={data} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Categories</h1>
              <div className="page__body">
                <div className="categories">
                  <ul className="categories__list">
                    {categories.map(category => (
                      <li
                        key={category.fieldValue}
                        className="categories__list-item"
                      >
                        <Link
                          to={`/categories/${kebabCase(category.fieldValue)}/`}
                          className="categories__list-item-link"
                        >
                          {category.fieldValue}
                          {category.totalCount}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CategoriesRoute;

export const pageQuery = graphql`
  query CategoryesQuery {
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
      limit: 2000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
