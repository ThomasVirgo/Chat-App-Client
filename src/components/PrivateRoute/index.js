import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({path, component: Component}) => {
    let token = localStorage.getItem('token')
    let isLoggedIn = token ? true : false 
    return (
        <Route path={path} render={()=>{
            return isLoggedIn ? <Component /> : <Redirect to='/login'/>
        }}/>
    )
}

export default PrivateRoute