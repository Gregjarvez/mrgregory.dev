import React from 'react';
import Helmet from 'react-helmet';

import 'assets/scss/init.scss';

function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet defaultTitle="Blog by Mr Gregory" />
      {children}
    </div>
  );
}

export default Layout;
