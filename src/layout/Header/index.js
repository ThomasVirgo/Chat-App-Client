import React from 'react';
import {Nav} from '../';
import { NavLink } from 'react-router-dom';
import './style.css'

const Header = () => {
    return (
        <header>
            <NavLink exact to='/'><h1 className='home-button'>Vibe</h1></NavLink>
            <Nav />
        </header>
    )
}

export default Header;