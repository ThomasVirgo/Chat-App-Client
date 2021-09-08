import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Nav = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    function toggleNav(){
        let newState = !isNavActive
        setIsNavActive(newState)
    }

    return (
        <>
        {!isNavActive && <i className='bx bx-menu menu-btn' onClick={toggleNav}></i>}
        {isNavActive && <i className='bx bx-x menu-btn' onClick={toggleNav}></i>}
        {isNavActive &&
        <div className="wrapper">
            <ul>
                <li onClick={toggleNav}><NavLink exact to='/'>Search</NavLink></li>
                <li onClick={toggleNav}><NavLink exact to='/account'>Account</NavLink></li>
                <li onClick={toggleNav}><NavLink to='/recommendations'>Reviews</NavLink></li>
                <li onClick={toggleNav}><NavLink to='/login'>Login</NavLink></li>
                <li onClick={toggleNav}><NavLink to='/register'>Register</NavLink></li>
            </ul>
        </div>
        }
        </>
    )
}

export default Nav