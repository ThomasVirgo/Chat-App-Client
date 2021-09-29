import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { sendMessage } from '../../requests'

const MessageForm = ({chosenFriend}) => {
    const [message, setMessage] = useState('')

    function handleChange(e){
        setMessage(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(message)
        setMessage('')
        const response = await sendMessage({
            to_user: chosenFriend,
            from_user: localStorage.getItem('user_id'),
            message: message
        })
        console.log(response)
    }

    const inputStyle = {
        width: "70vw"
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <TextField label="Message" value={message} onChange={handleChange} required style={inputStyle}/>
            <Button type='submit' variant="contained" color="primary">Send</Button>
        </form>
        </>
    )
}

export default MessageForm;