import React, { useState } from 'react';
import ReactDisqusComments from 'react-disqus-comments';

const Disqus = ({ postNode, siteMetadata }) => {
  const [toasts, setToast] = useState([]);

  if (!siteMetadata.disqusShortname) {
    return null;
  }

  const post = postNode.frontmatter;
  const url = siteMetadata.url + postNode.fields.slug;

  const notifyAboutComment = () => {
    setToast([...toasts, { text: 'New comment available!!' }]);
  };

  return (
    <ReactDisqusComments
      url={url}
      title={post.title}
      identifier={post.title}
      category_id={post.category_id}
      onNewComment={notifyAboutComment}
      shortname={siteMetadata.disqusShortname}
    />
  );
};

export default Disqus;
