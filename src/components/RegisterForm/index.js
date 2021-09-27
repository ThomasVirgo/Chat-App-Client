import React, {useState} from 'react'
import { requestRegister } from '../../requests'
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import './style.css'

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleConfirm(e){
        setConfirmPassword(e.target.value)
    }

    function handleFirstName(e){
        setFirstName(e.target.value)
    }

    function handleLastName(e){
        setLastName(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(email, password, confirmPassword)
        const [ isSuccess, response ]  = await requestRegister({username:email, email, password, password_confirmation: confirmPassword, first_name:firstName, last_name:lastName})
        if (isSuccess){
            setErrors(['You have successfully registered'])
        } else {
            setErrors(Object.keys(response).map(key => response[key]))
        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setFirstName('')
        setLastName('')
    }

    const errorList = errors.map((error,index) => <li key={index}>{error}</li>)

    return (
        <>
        <form onSubmit={handleSubmit} className='login__form'>
            <h2>Register</h2>
            <TextField label="First Name" value={firstName} onChange={handleFirstName} required/>
            <TextField label="Last Name" value={lastName} onChange={handleLastName} required/>
            <TextField label="Email" value={email} onChange={handleEmail} required/>
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