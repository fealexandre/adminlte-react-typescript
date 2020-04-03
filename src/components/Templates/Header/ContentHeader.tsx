import React, { FunctionComponent } from 'react';

type Props = {
  title: string;
};

const ContentHeader: FunctionComponent<Props> = ({ title }) => (
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">{title}</h1>
        </div>
      </div>
    </div>
  </div>
);

export default ContentHeader;
