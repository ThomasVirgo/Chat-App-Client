import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedOutRoute = ({ path, component: Component }) => {
  let token = localStorage.getItem('token');
  let isLoggedIn = token ? true : false;
  return (
    <Route
      path={path}
      render={() => {
        return <Component />;
        // return !isLoggedIn ? <Component /> : <Redirect to="/account" />; //#problem code
      }}
    />
  );
};

export default LoggedOutRoute;
