import React, { FunctionComponent } from 'react';

import logo from 'src/assets/images/logo.svg';
import SidebarUserPanel from './SidebarUserPanel';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'src/store';
import { UsersState } from 'src/store/ducks/users/types';

import routes from 'src/assets/json/routes.json';

type Route = {
  name: string;
  path: string;
  icon?: string;
  children?: Route[] | null;
};

const Sidebar: FunctionComponent = () => {
  const { me } = useSelector<ApplicationState, UsersState>(
    state => state.users
  );

  const renderRoutes = () => {
    return routes.map(({ children, icon, name, path }: Route, index) => {
      let hasChildren = children && children.length > 0;

      return (
        <Nav.Item
          key={`${path}${index}`}
          as="li"
          className={`${hasChildren ? 'has-treeview' : ''}`}
        >
          <Nav.Link href="#">
            <i className={`nav-icon fas fa-${icon}`}></i>
            <p>
              {name}
              {hasChildren && <i className="right fas fa-angle-left"></i>}
            </p>
          </Nav.Link>
          {hasChildren && renderChildrenRoutes(children)}
        </Nav.Item>
      );
    });
  };

  const renderChildrenRoutes = (children: Array<Route> | null | undefined) => {
    if (!children) {
      return <></>;
    }

    return (
      <Nav as="ul" className="nav nav-treeview">
        {children.map(({ icon = 'circle', name, path }: Route, index) => (
          <Nav.Item as="li" key={`${path}${index}`}>
            <Nav.Link href={path}>
              <i className={`far fa-${icon} nav-icon`}></i>
              <p>{name}</p>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    );
  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <div className="d-flex">
        <a href="#" className="brand-link mx-auto">
          <img src={logo} alt="Logo" height="50" />
        </a>
      </div>
      <div className="sidebar">
        <SidebarUserPanel me={me} />
        <Nav as="ul" className="nav nav-pills nav-sidebar flex-column">
          {renderRoutes()}
        </Nav>
      </div>
    </aside>
  );
};

export default Sidebar;
