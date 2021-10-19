import React, { useState, useEffect } from 'react';
import { sendFriendRequest } from '../../requests';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFriendRequest } from '../../actions';

const UserCard = ({data, friend, is_request_pending}) => {

    const history = useHistory()
    const dispatch = useDispatch();

    async function handleFriendRequest(e){
        const response = await sendFriendRequest({
            to_user: data.username,
            from_user: localStorage.getItem('username')
        })
        dispatch(addFriendRequest(data.id))
    }
    
    function redirectToChat(){
        history.push('/chat')
    }

    return (
        <>
        <h1>{`${data.first_name} ${data.last_name}`}</h1>
        {friend ? 
            <button onClick={redirectToChat}> Send Message </button> : 
            data.friends.includes(Number(localStorage.getItem('user_id'))) ? 
            <p>You are friends already!</p> :
            is_request_pending ? 
            <p>Request pending ... </p> :
            <button onClick = {handleFriendRequest}>Add Friend</button>
        }
        </>
    )
}

export default UserCard;