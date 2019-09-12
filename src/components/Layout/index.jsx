import React from 'react';

import SEO from 'components/Seo';
import 'assets/scss/init.scss';

function Layout({ children }) {
  return (
    <div className="layout">
      <SEO />
      {children}
    </div>
  );
}

export default Layout;
