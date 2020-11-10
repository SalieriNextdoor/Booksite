import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/routing/PrivateRoute';

import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Forgot from './components/pages/Forgot';
import Dashboard from './components/pages/Dashboard';

import AuthState from './context/auth/AuthState';

function App() {
  return (
    <AuthState>
      <Router>
          <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Signup} exact path="/signup"/>
            <Route component={Forgot} exact path="/forgot"/>
            <PrivateRoute component={Dashboard}  exact path="/dashboard"/>
            <Route component={Home} />
          </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
