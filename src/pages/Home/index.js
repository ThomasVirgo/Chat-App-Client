import React, {useEffect, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.css'

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(()=>{
        const username = localStorage.getItem('username')
        const token = localStorage.getItem('token')
        if (username && token){
            setIsLoggedIn(true)
        }
    }, [])
    return (
        <>
        {
            isLoggedIn ? 
            <Redirect to = '/account'/> :
            <div className = 'home__container'>
            <Link to='login'>Login</Link>
            <Link to='login'>Register</Link>
            </div>
        }
        </>
    )
}

export default Home;