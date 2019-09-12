import React from 'react';
import SEO from 'components/Seo';
import Sidebar from 'components/Sidebar';

import './style.scss';

function PageTemplateDetails({ data: { markdownRemark: page }, data }) {
  return (
    <div>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.description}
      />
      <Sidebar data={data} />
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">{page.frontmatter.title}</h1>
            <div
              className="page__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTemplateDetails;
