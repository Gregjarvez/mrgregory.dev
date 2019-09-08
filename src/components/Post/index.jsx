import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

const Post = ({
  data: {
    node: {
      fields: { slug, categorySlug },
      frontmatter: { title, date, category, description },
    },
  },
}) => {
  const formattedDate = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'long',
  }).format(new Date(date));

  return (
    <div className="post">
      <div className="post__meta">
        <time dateTime={formattedDate} className="post__meta-time">
          {formattedDate}
        </time>
        <span className="post__meta-divider" />
        <span className="post__meta-category" key={categorySlug}>
          <Link to={categorySlug} className="post__meta-category-link">
            {category}
          </Link>
        </span>
      </div>
      <h2 className="post__title">
        <Link className="post__title-link" to={slug}>
          {title}
        </Link>
      </h2>
      <p className="post__description">{description}</p>
      <Link className="post__readmore" to={slug}>
        Read
      </Link>
    </div>
  );
};

export default Post;
