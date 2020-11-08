import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Forgot from './components/pages/Forgot';

function App() {
  return (
    <Router>
        <Switch>
          <Route component={Login} exact path="/login"/>
          <Route component={Signup} exact path="/signup"/>
          <Route component={Forgot} exact path="/forgot"/>
          <Route component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
