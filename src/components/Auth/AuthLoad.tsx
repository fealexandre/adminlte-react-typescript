import React, { FunctionComponent } from 'react';

import loader from 'src/assets/images/loader.svg';

const AuthLoad: FunctionComponent = () => {
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo mb-4">
          <img src={loader} height="140" />
        </div>
      </div>
    </div>
  );
};

export default AuthLoad;
