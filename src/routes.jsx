import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/Page.jsx';
import NoMatch from './components/Legos/NoMatch.jsx';
import LandingPage from './components/Landing/Page.jsx';
import PrivateRoute from './components/Legos/PrivateRoute.jsx';
import SystemSettings from './components/Settings/SystemSettings.jsx';
import PrivacySettings from './components/Settings/PrivacySettings.jsx';
import AccountSettings from './components/Settings/AccountSettings/Page.jsx';

export default (
  <main>

    <Switch>

      <Route exact path={'/'} component={LandingPage} />

      <Route exact path={'/login'} component={LandingPage} />

      <Route exact path={'/signup'} component={LandingPage} />

      <PrivateRoute path={'/home'} component={HomePage} />

      <PrivateRoute path={'/settings/account'} component={AccountSettings} />

      <PrivateRoute path={'/settings/privacy'} component={PrivacySettings} />

      <PrivateRoute path={'/settings/system'} component={SystemSettings} />

      <Route component={NoMatch} />

    </Switch>


  </main>
);
