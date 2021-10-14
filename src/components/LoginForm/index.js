import React, {useState} from 'react'
import { requestLogin, getUserData } from '../../requests'
import { Link, useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import './style.css'

const LoginForm = ({socket}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        const [ isSuccess, response ]  = await requestLogin({username:email, password})
        if (isSuccess){
            const userInfo = await getUserData(email)
            localStorage.setItem('username', email)
            localStorage.setItem('first_name', userInfo.first_name)
            localStorage.setItem('last_name', userInfo.last_name)
            localStorage.setItem('user_id', userInfo.id)
            localStorage.setItem('token', response.token)
            socket.auth = { username: userInfo.id };
            socket.connect();
            history.push('/dashboard')
        } else {
            setErrors(Object.keys(response).map(key => response[key]))
            setEmail('')
            setPassword('')
        }
    }

    const errorList = errors.map((error,index) => <li key={index}>{error}</li>)

    return (
        <>
        <form onSubmit={handleSubmit} className='login__form'>
            <h2>Login</h2>
            <TextField label="Email" value={email} onChange={handleEmail} required/>
            <TextField label="Password" type='password' value={password} onChange={handlePassword} required/>
            <p>Don't have an account? Register <Link to='/register'> Here </Link></p>
            { !!errors.length && <ul>{errorList}</ul> }
            <Button type='submit' variant="contained" color="primary" endIcon={<Icon>send</Icon>}>Submit</Button>
        </form>
        </>
    )
}

export default LoginForm;