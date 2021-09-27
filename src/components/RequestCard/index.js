import React from 'react';
import { RespondToFriendRequest } from '../../requests';

const RequestCard = ({data}) => {

    async function accept(){
        const info = {
            to_user: data.to_user,
            from_user: data.from_user,
            is_complete: true,
            accepted: true
        }
        const response = await RespondToFriendRequest(info, data.id)
        console.log(response)
    }

    async function decline(){
        const info = {
            to_user: data.to_user,
            from_user: data.from_user,
            is_complete: true,
            accepted: false
        }
        const response = await RespondToFriendRequest(info, data.id)
        console.log(response)
    }

    return (
        <>
        <h1>{data.request_name}</h1>
        <button onClick = {accept}>Accept</button>
        <button onClick = {decline}>Decline</button>
        </>
    )
}

export default RequestCard;