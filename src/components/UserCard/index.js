import React from 'react';
import { sendFriendRequest } from '../../requests';

const UserCard = ({data, friend}) => {

    async function handleFriendRequest(e){
        const response = await sendFriendRequest({
            to_user: data.username,
            from_user: localStorage.getItem('username')
        })
    }

    return (
        <>
        <h1>{`${data.first_name} ${data.last_name}`}</h1>
        {friend ? 
            <button> Send Message </button> : 
            <button onClick = {handleFriendRequest}>Add Friend</button>
        }
        </>
    )
}

export default UserCard;