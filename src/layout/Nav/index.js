import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../actions'
import { useDispatch } from 'react-redux'
import './style.css'

const Nav = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const dispatch = useDispatch()

    function toggleNav(){
        let newState = !isNavActive
        setIsNavActive(newState)
    }

    function handleLogout(){
        toggleNav()
        localStorage.clear()
        dispatch(logoutUser())
    }

    let username = localStorage.getItem('username')

    return (
        <div aria-label="navbar">
        {!isNavActive && <i className='bx bx-menu menu-btn' onClick={toggleNav} aria-label="clickable"></i>}
        {isNavActive && <i className='bx bx-x menu-btn' onClick={toggleNav}></i>}
        {isNavActive &&
        <div className="wrapper" aria-label="menu-wrapper">
            <ul aria-label="navlist">
                {username && <li onClick={toggleNav} ><NavLink exact to='/account'>Hi {username}!</NavLink></li>}
                <li onClick={toggleNav}><NavLink exact to='/'>Search</NavLink></li>
                <li onClick={toggleNav}><NavLink exact to='/account'>Account</NavLink></li>
                <li onClick={toggleNav}><NavLink to='/recommendations'>Reviews</NavLink></li>
                {!username && <li onClick={toggleNav}><NavLink to='/login'>Login</NavLink></li>}
                {!username && <li onClick={toggleNav}><NavLink to='/register'>Register</NavLink></li>}
                {username && <li onClick={handleLogout}><NavLink to='/login'>Logout</NavLink></li>}
            </ul>
        </div>
        }
        </div>
    )
}

export default Nav