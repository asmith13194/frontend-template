import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LandingPage from './components/Landing/Page.jsx';
import HomePage from './components/Home/Page.jsx';
import AccountSettings from './components/Settings/AccountSettings/Page.jsx';
import PrivacySettings from './components/Settings/PrivacySettings.jsx';
import SystemSettings from './components/Settings/SystemSettings.jsx';
import NoMatch from './components/NoMatch.jsx';
import jwt from 'jsonwebtoken';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>
      localStorage.getItem('user') !== null
      ?
      jwt.verify(JSON.parse(localStorage.getItem('user')).token, process.env.REACT_APP_JWTSECRET, (err, decoded) => {
        switch(err){
          case null:
            decoded.exp = Math.floor(Date.now() / 1000) + (60 * 60);

            // localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify({ info: JSON.parse(localStorage.getItem('user')).info, token: jwt.sign(decoded, process.env.REACT_APP_JWTSECRET) }));
            return <Component {...props}/>;
          default:
            localStorage.removeItem('user');
            return <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}/>;
        }
      })
      :
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
    }/>
);


export default (
  <main>

    <Switch>

      <Route exact path={'/'} component={LandingPage} />

      <PrivateRoute path={'/home'} component={HomePage} />

      <PrivateRoute path={'/settings/account'} component={AccountSettings} />

      <PrivateRoute path={'/settings/privacy'} component={PrivacySettings} />

      <PrivateRoute path={'/settings/system'} component={SystemSettings} />

      <Route component={NoMatch} />

    </Switch>

  </main>
);
