import React, {useState} from 'react'
import { requestRegister } from '../../requests'
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import './style.css'

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleConfirm(e){
        setConfirmPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(username, password, confirmPassword)
        requestRegister({username, password, password_confirmation: confirmPassword})
        setUsername('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <>
        <form onSubmit={handleSubmit} className='login__form'>
            <h2>Register</h2>
            <TextField label="Username" onChange={handleUsername} />
            <TextField label="Password" type='password' onChange={handlePassword}/>
            <TextField label="Confirm Password" type='password' onChange={handleConfirm}/>
            <p>Already have an account? Login <Link to='/login'> Here </Link> </p>
            <Button type='submit' variant="contained" color="primary" endIcon={<Icon>send</Icon>}>Submit</Button>
        </form>
        </>
    )
}

export default RegisterForm;