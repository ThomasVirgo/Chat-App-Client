import React, { useState, useEffect } from 'react';
import { Nav } from '../../layout'
import { FriendDropdown, MessagesContainer, MessageForm } from '../../components';
import { getChatHistory } from '../../requests';

const Chat = () => {
    const [chosenFriend, setChosenFriend] = useState()
    const [messages, setMessages] = useState([])
    const user_id = localStorage.getItem('user_id')


    useEffect(async()=>{
        if (chosenFriend){
            const messageHistory = await getChatHistory(user_id, chosenFriend)
            messageHistory.sort((a,b) => a.id - b.id)
            setMessages(messageHistory)
            console.log(messageHistory);
        }
    }, [chosenFriend])

    return (
        <>
        <Nav/>
        <FriendDropdown chosenFriend = {chosenFriend} setChosenFriend = {setChosenFriend}/>
        <MessagesContainer  messages = {messages} />
        <MessageForm chosenFriend = {chosenFriend} messages = {messages} setMessages={setMessages}/>
        </>
    )
}

export default Chat;