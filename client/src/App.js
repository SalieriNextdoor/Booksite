import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
// import PrivateRoute from './components/routing/PrivateRoute';

import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Forgot from './components/pages/Forgot';
import Dashboard from './components/pages/Dashboard';
import BookPage from './components/pages/BookPage';
import WriteReview from './components/pages/WriteReview';
import NotFound from './components/pages/NotFound';

import AuthState from './context/auth/AuthState';
import BookState from './context/book/BookState';

function App() {
  return (
    <AuthState>
      <BookState>
        <Router>
            <Switch>
              <Route component={Login} exact path="/login"/>
              <Route component={Signup} exact path="/signup"/>
              <Route component={Forgot} exact path="/forgot"/>
              <Route component={Dashboard}  exact path="/dashboard"/> 
              {/* Set to private after ^ */}
              <Route component={BookPage} path="/bookpage/:book_id"/>
              <Route component={WriteReview}  exact path="/writereview"/>
              <Route component={Home} exact path="/" />
              <Route component={NotFound} />
            </Switch>
        </Router>
      </BookState>
    </AuthState>
  );
}

export default App;
