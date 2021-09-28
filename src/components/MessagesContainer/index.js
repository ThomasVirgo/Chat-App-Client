import React, { useState, useEffect } from 'react';
import { MessageCard } from '..';
import { getChatHistory } from '../../requests';

const MessagesContainer = ({chosenFriend}) => {
    const [messages, setMessages] = useState([])
    const user_id = Number(localStorage.getItem('user_id'))

    useEffect(async()=>{
        if (chosenFriend){
            const messageHistory = await getChatHistory(user_id, chosenFriend)
            messageHistory.sort((a,b) => a.id - b.id)
            setMessages(messageHistory)
            console.log(messageHistory);
        }
    }, [chosenFriend])

    const messageCards = messages.map((item, idx) => <div key={idx}><MessageCard message={item.message} isRight={item.from_user == user_id} /></div>)

    const containerStyle = {
        padding: "10px",
        margin: "auto",
        marginBottom: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        background: "rgba(255, 255, 255, 0.65)",
        borderRadius: "5px",
        width: "95vw",
        height: "50vh"
    }

    return (
        <div style={containerStyle}>
            {messageCards}
        </div>
    )
}

export default MessagesContainer;