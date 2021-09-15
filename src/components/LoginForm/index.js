import React, {useState} from 'react'
import { requestLogin } from '../../requests'
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import './style.css'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(username, password)
        requestLogin({username, password})
        setUsername('')
        setPassword('')
    }

    return (
        <>
        <form onSubmit={handleSubmit} className='login__form'>
            <h2>Login</h2>
            <TextField label="Username" onChange={handleUsername} />
            <TextField label="Password" type='password' onChange={handlePassword}/>
            <p>Don't have an account? Register <Link to='/register'> Here </Link></p>
            <Button type='submit' variant="contained" color="primary" endIcon={<Icon>send</Icon>}>Submit</Button>
        </form>
        </>
    )
}

export default LoginForm;