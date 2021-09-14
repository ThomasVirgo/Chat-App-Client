import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages'
import { LoginForm } from './components'


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
          <LoginForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
