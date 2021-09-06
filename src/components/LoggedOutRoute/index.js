import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedOutRoute = ({path, component: Component}) => {
    // check localstorage to see if there is a token
    let isLoggedIn = false
    return (
        <Route path={path} render={()=>{
            return !isLoggedIn ? <Component /> : <Redirect to='/account'/>
        }}/>
    )
}

export default LoggedOutRoute