import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Account, LandingPage, Login, Recommendations, Register, SearchResults } from './pages';
import { NavigationBar, Footer } from './layout';

// import CSS

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/Account">
          <Account />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Recommendations">
          <Recommendations />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/SearchResults">
          <SearchResults />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
