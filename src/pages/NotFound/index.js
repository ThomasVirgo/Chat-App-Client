import React from 'react';
import {Nav} from '../';
import { NavLink } from 'react-router-dom';
// import './style.css'

const NotFound = () => {
    return (
        <div>
            <h1> Oops!</h1>
            <h3>This page does not exist.</h3>
            <h4>It seems you may be a little lost. Want to look up a hotspot for a date? Click <NavLink exact to='/'>here</NavLink>. Looking for the latest recommendations? See the most recent reviews for places <NavLink to='/recommendations'>here</NavLink>.</h4>
        </div>
    )
}

export default NotFound;