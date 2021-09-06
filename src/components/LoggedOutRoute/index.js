import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedOutRoute = ({component: Component}) => {
    // check localstorage to see if there is a token
    isLoggedIn = false
    return (
        <Route render={()=>{
            return !isLoggedIn ? <Component /> : <Redirect to='/account'/>
        }}/>
    )
}

export default LoggedOutRoute