import React from 'react';

import './style.scss';
import 'assets/fonts/fontello-771c82e0/css/fontello.css';

function SocialListAnchor({ href, icon }) {
  return (
    <li className="links__list-item">
      <a target="_blank" rel="noopener noreferrer" href={href}>
        <i className={icon} />
      </a>
    </li>
  );
}

const Links = ({ data: author }) => (
  <div className="links">
    <ul className="links__list">
      <SocialListAnchor href={author.email} icon="icon-mail" />
      <SocialListAnchor icon="icon-github" href={author.github} />
      <SocialListAnchor icon="icon-twitter" href={author.twitter} />
      <SocialListAnchor icon="icon-rss" href={author.rss} />
    </ul>
  </div>
);

export default Links;
