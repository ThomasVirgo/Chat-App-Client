import React from 'react';
import {Nav} from '../';
import { NavLink } from 'react-router-dom';
import goodvibes from '../../img/vibee.gif';
import './style.css'

const Header = () => {
    return (
        <header>
            <NavLink className='img__link' exact to='/'><img id='home-icon' aria-label="logo" src={goodvibes} alt='vibes-logo'/></NavLink>
            <span id='nav-slogan'>Find London's best dating ideas</span>
            <Nav />
        </header>
    )
}

export default Header;