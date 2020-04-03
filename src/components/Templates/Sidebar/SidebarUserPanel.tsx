import React, { FunctionComponent } from 'react';
import { User } from 'src/store/ducks/users/types';

import user from 'src/assets/images/user.svg';

type Props = {
  me: User;
};

const SidebarUserPanel: FunctionComponent<Props> = ({ me }) => (
  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
    <div className="image">
      <img src={user} className="img-circle elevation-2" alt="User Image" />
    </div>
    <div className="info">
      <a href="#" className="d-block">
        {me.name}
      </a>
    </div>
  </div>
);

export default SidebarUserPanel;
