import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const RegistrationForm = (props) => {
    const [state, setState] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            props.showError('Passwords do not match');
        }
    }
        
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={state.username}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={state.password}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" value={state.confirmPassword} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmitClick}>
                    Submit
                </Button>
            </Form>
        )
    }
}

export default RegistrationForm;