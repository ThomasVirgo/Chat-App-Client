import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component}) => {
    // check localstorage to see if there is a token
    let isLoggedIn = true
    return (
        <Route render={()=>{
            return isLoggedIn ? <Component /> : <Redirect to='/login'/>
        }}/>
    )
}

export default PrivateRoute