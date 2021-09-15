import React, {useState} from 'react'
import { requestLogin } from '../../requests'
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import './style.css'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        const [ isSuccess, response ]  = await requestLogin({username, password})
        if (isSuccess){
            console.log(response)
            localStorage.setItem('username', username)
            localStorage.setItem('token', response.token)
            setErrors(['Login was successful'])
        } else {
            setErrors(Object.keys(response).map(key => response[key]))
        }
        setUsername('')
        setPassword('')
    }

    const errorList = errors.map((error,index) => <li key={index}>{error}</li>)

    return (
        <>
        <form onSubmit={handleSubmit} className='login__form'>
            <h2>Login</h2>
            <TextField label="Username" value={username} onChange={handleUsername} required/>
            <TextField label="Password" type='password' value={password} onChange={handlePassword} required/>
            <p>Don't have an account? Register <Link to='/register'> Here </Link></p>
            { !!errors.length && <ul>{errorList}</ul> }
            <Button type='submit' variant="contained" color="primary" endIcon={<Icon>send</Icon>}>Submit</Button>
        </form>
        </>
    )
}

export default LoginForm;