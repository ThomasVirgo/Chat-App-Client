import React from 'react';
import {Nav} from '../';
import { NavLink } from 'react-router-dom';
import goodvibes from '../../img/vibee.gif';
import './style.css'

const Header = () => {
    return (
        <header>
            <NavLink exact to='/'><img id='home-icon' src={goodvibes} alt='vibes-logo'/></NavLink>
            {/* <h4 id='nav-slogan'>London's good Vibes dating spots</h4> */}
            <Nav />
        </header>
    )
}

export default Header;