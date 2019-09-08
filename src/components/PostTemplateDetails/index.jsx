import React from 'react';
import { Link } from 'gatsby';

import Disqus from 'components/Disqus/Disqus';

import './style.scss';

function PostTemplateDetails({
  data: {
    markdownRemark: post,
    site: { siteMetadata },
  },
}) {
  const formattedDate = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'long',
  }).format(new Date(post.frontmatter.date));

  return (
    <div>
      <Link className="post-single__home-button" to="/">
        All Articles
      </Link>
      <div className="post-single">
        <div className="post-single__inner">
          <h1 className="post-single__title">{post.frontmatter.title}</h1>
          <div
            className="post-single__body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="post-single__date">
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Published on <em>{formattedDate}</em>
          </div>
        </div>
        <div className="post-single__footer">
          <div className="post-single__tags">
            <ul className="post-single__tags-list">
              {(post.fields.tagSlugs || []).map((tag, i) => (
                <li className="post-single__tags-list-item" key={tag}>
                  <Link to={tag} className="post-single__tags-list-item-link">
                    {post.frontmatter.tags[i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <Disqus postNode={post} siteMetadata={siteMetadata} />
        </div>
      </div>
    </div>
  );
}

export default PostTemplateDetails;
