import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages'
import { LoginForm, RegisterForm } from './components'


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
      </Switch>
    </>
  );
}

export default App;
