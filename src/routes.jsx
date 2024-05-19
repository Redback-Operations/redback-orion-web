import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import Stats from './components/Stats';
import Team from './components/Team';
import Login from './components/Login';
import Register from './components/Register';
import Pi_Cam from './components/PiCam';
import Train from './components/Train';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/profile" component={Profile} />
      <Route path="/stats" component={Stats} />
      <Route path="/team" component={Team} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/Pi_Cam" component={Pi_Cam} />
      <Route path="/Train" component={Train} />
    </Switch>
  </Router>
);
export default Routes;