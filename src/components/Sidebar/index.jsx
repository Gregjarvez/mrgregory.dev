import React from 'react';
import { Link } from 'gatsby';

import Menu from 'components/Menu';
import Links from 'components/Links';
import profilePic from 'assets/media/photo.jpg';

import './style.scss';

const Sidebar = ({
  data: {
    site: {
      siteMetadata: { author, subtitle, copyright, menu },
    },
  },
}) => (
  <div className="sidebar">
    <div className="sidebar__inner">
      <div className="sidebar__author">
        <Link to="/">
          <img
            src={profilePic}
            alt={author.name}
            className="sidebar__author-photo"
          />
        </Link>
        <h2 className="sidebar__author-title">
          <Link className="sidebar__author-title-link" to="/">
            {author.name}
          </Link>
        </h2>
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
      <Menu data={menu} />
      <Links data={author} />
      <p className="sidebar__copyright">{copyright}</p>
    </div>
  </div>
);

export default Sidebar;
