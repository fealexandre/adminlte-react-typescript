import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
//import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';

import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';

import { UsersState } from './store/ducks/users/types';
import { ApplicationState } from './store';
import AuthLoad from './components/Auth/AuthLoad';

import { loadMe } from 'src/store/ducks/users/actions';
import Header from './components/Templates/Header/Header';
import Sidebar from './components/Templates/Sidebar/Sidebar';
import Footer from './components/Templates/Footer/Footer';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMe());
  }, []);

  const { me, loading } = useSelector<ApplicationState, UsersState>(
    state => state.users
  );

  if (loading) {
    return <AuthLoad />;
  }

  const isAuthenticated = me && me.id ? true : false;

  if (isAuthenticated) {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <div className="content">
            <Switch>
              <Route path="/home" component={Home} />
              <Redirect from="*" to="/home" />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/login" />
      </Switch>
    );
  }
};

export default App;
