import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

const Menu = ({ data: menu }) => (
  <nav className="menu">
    <ul className="menu__list">
      {menu.map(item => (
        <li className="menu__list-item" key={item.path}>
          <Link
            to={item.path}
            className="menu__list-item-link"
            activeClassName="menu__list-item-link menu__list-item-link--active"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
