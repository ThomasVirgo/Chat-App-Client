import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Account, LandingPage, Login, Recommendations, Register, SearchResults, NotFound } from './pages';
import { NavigationBar, Footer, Nav, Header } from './layout';
import { LoggedOutRoute, PrivateRoute } from './components';
import './style.css';

// import CSS

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <PrivateRoute path="/account" component={Account} />
        <PrivateRoute path="/recommendations" component={Recommendations} />
        <LoggedOutRoute path="/login" component={Login} />
        <LoggedOutRoute path="/register" component={Register} />
        <LoggedOutRoute path="/search-results" component={SearchResults} />
        <NotFound />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
