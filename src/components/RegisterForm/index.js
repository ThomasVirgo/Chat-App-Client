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
    const [errors, setErrors] = useState([])

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleConfirm(e){
        setConfirmPassword(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(username, password, confirmPassword)
        const [ isSuccess, response ]  = await requestRegister({username, password, password_confirmation: confirmPassword})
        if (isSuccess){
            setErrors(['You have successfully registered'])
        } else {
            setErrors(Object.keys(response).map(key => response[key]))
        }
        setUsername('')
        setPassword('')
        setConfirmPassword('')
    }

    const errorList = errors.map((error,index) => <li key={index}>{error}</li>)

    return (
        <>
        <form onSubmit={handleSubmit} className='login__form'>
            <h2>Register</h2>
            <TextField label="Username" value={username} onChange={handleUsername} required/>
            <TextField label="Password" type='password' value={password} onChange={handlePassword} required/>
            <TextField label="Confirm Password" type='password' value={confirmPassword} onChange={handleConfirm} required/>
            <p>Already have an account? Login <Link to='/login'> Here </Link> </p>
            { !!errors.length && <ul>{errorList}</ul> }
            <Button type='submit' variant="contained" color="primary" endIcon={<Icon>send</Icon>}>Submit</Button>
        </form>
        </>
    )
}

export default RegisterForm;