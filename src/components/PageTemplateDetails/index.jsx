import React from 'react';
import Sidebar from 'components/Sidebar';

import './style.scss';

function PageTemplateDetails({ data: { markdownRemark: page }, data }) {
  return (
    <div>
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
