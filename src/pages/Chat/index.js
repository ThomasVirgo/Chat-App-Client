import React, { useState } from 'react';
import { Nav } from '../../layout'
import { FriendDropdown, MessagesContainer, MessageForm } from '../../components';

const Chat = () => {
    const [chosenFriend, setChosenFriend] = useState()
    console.log(chosenFriend)

    return (
        <>
        <Nav/>
        <FriendDropdown chosenFriend = {chosenFriend} setChosenFriend = {setChosenFriend}/>
        <MessagesContainer chosenFriend = {chosenFriend} />
        <MessageForm chosenFriend = {chosenFriend} />
        </>
    )
}

export default Chat;