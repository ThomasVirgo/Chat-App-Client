import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Dashboard } from './pages'
import { LoginForm, RegisterForm } from './components'
import './style.css'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
