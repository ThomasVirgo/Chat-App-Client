import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { sendMessage } from '../../requests'
import { isUserActive } from '../../utils' ;

const MessageForm = ({chosenFriend, messages, setMessages, socket}) => {
    const [message, setMessage] = useState('')
    const user_id = localStorage.getItem('user_id')
    const socketInfo = useSelector(state => state.socketInfo)

    function handleChange(e){
        setMessage(e.target.value)
    }

    useEffect(()=>{
        socket.emit('get all active sockets')
    }, [chosenFriend])

    async function handleSubmit(e){
        e.preventDefault()
        setMessage('')
        let newId = messages.length ? messages[messages.length-1].id + 1 : 0
        const newMessageObj = {
            'from_user': user_id,
            'to_user': chosenFriend,
            message: message,
            date: new Date(),
            id: newId
        }
        const newMessages = [...messages, newMessageObj]
        setMessages(newMessages)
        const response = await sendMessage({
            to_user: chosenFriend,
            from_user: user_id,
            message: message
        })
        socket.emit('get all active sockets')
        // check if the user is active 
        let [isActive, theirSocketId] = isUserActive(socketInfo, chosenFriend)
        console.log(isActive, theirSocketId);
        // if they are active, send them a message via socket server
        socket.emit('private message', theirSocketId, message)
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