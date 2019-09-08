import React from 'react';
import Post from 'components/Post';

function CategoryTemplateDetails({ pageContext, data: { allMarkdownRemark } }) {
  return (
    <div className="content">
      <div className="content__inner">
        <div className="page">
          <h1 className="page__title">{pageContext.category}</h1>
          <div className="page__body">
            {allMarkdownRemark.edges.map(post => (
              <Post data={post} key={post.node.fields.slug} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryTemplateDetails;
