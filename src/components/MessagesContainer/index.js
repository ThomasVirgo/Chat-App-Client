import React, { useEffect, useRef } from 'react';
import { MessageCard } from '..';

const MessagesContainer = ({ messages }) => {
    const user_id = Number(localStorage.getItem('user_id'))
    const messagesEndRef = useRef(null)

    function scrollToBottom(){
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(() => {
        scrollToBottom()
      }, [messages]);


    const messageCards = messages.map((item, idx) => <div key={idx}><MessageCard message={item.message} isRight={item.from_user == user_id} /></div>)

    const containerStyle = {
        padding: "10px",
        margin: "auto",
        marginBottom: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        background: "rgba(255, 255, 255, 0.65)",
        borderRadius: "5px",
        width: "90vw",
        height: "50vh",
        overflow: "hidden",
        overflowY: "scroll",
    }

    return (
        <div style={containerStyle}>
            {messageCards}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default MessagesContainer;