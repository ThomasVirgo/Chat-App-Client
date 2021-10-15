import React, { useState, useEffect } from 'react';
import { Nav } from '../../layout'
import { FriendDropdown, MessagesContainer, MessageForm } from '../../components';
import { getChatHistory } from '../../requests';
import { findUserId } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, initMessages } from '../../actions';

const Chat = ({socket}) => {
    const [chosenFriend, setChosenFriend] = useState()
    const [messages, setMessages] = useState([])
    const user_id = localStorage.getItem('user_id')
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    socket.on('private message', (theirSocketId, msg) => {
        console.log('recieved message')
        let theirUserId = findUserId(users, theirSocketId)
        if (theirUserId == chosenFriend){
            // let newMessages = [...messages]
            // newMessages.push(
            //     {
            //         "from_user": theirUserId,
            //         "to_user": user_id,
            //         // "id": messages[messages.length-1].id+1,
            //         "id": 100,
            //         "date": new Date(),
            //         "message": msg
            //     }
            // )
            // setMessages(newMessages)
            let newMessage = {
                        "from_user": theirUserId,
                        "to_user": user_id,
                        "id": 100,
                        "date": new Date(),
                        "message": msg
                    }
            dispatch(addMessage(newMessage))
        }
    })


    useEffect(async()=>{
        if (chosenFriend){
            const messageHistory = await getChatHistory(user_id, chosenFriend)
            messageHistory.sort((a,b) => a.id - b.id)
            dispatch(initMessages(messageHistory))
            setMessages(messageHistory)
            console.log(messageHistory);
        }
    }, [chosenFriend])

    return (
        <>
        <Nav socket = {socket}/>
        <FriendDropdown chosenFriend = {chosenFriend} setChosenFriend = {setChosenFriend}/>
        <MessagesContainer  messages = {messages} />
        <MessageForm chosenFriend = {chosenFriend} messages = {messages} setMessages={setMessages} socket = {socket}/>
        </>
    )
}

export default Chat;