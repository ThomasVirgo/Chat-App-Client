import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { sendMessage } from '../../requests'

const MessageForm = ({chosenFriend, messages, setMessages}) => {
    const [message, setMessage] = useState('')
    const user_id = localStorage.getItem('user_id')

    function handleChange(e){
        setMessage(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(message)
        setMessage('')
        const newMessageObj = {
            'from_user': user_id,
            'to_user': chosenFriend,
            message: message,
            date: new Date(),
            id: messages[messages.length-1].id + 1
        }
        const newMessages = [...messages, newMessageObj]
        setMessages(newMessages)
        const response = await sendMessage({
            to_user: chosenFriend,
            from_user: user_id,
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