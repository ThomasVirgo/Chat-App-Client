import React from 'react';
import { RespondToFriendRequest } from '../../requests';
import { useDispatch } from 'react-redux';
import { completeRequest } from '../../actions';

const RequestCard = ({data}) => {

    const dispatch = useDispatch()

    async function accept(){
        const info = {
            to_user: data.to_user,
            from_user: data.from_user,
            is_complete: true,
            accepted: true
        }
        const response = await RespondToFriendRequest(info, data.id)
        console.log(response)
        dispatch(completeRequest(data.id))
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
        dispatch(completeRequest(data.id))
    }

    return (
        <>
        <h1>{data.from_user_name}</h1>
        <button onClick = {accept}>Accept</button>
        <button onClick = {decline}>Decline</button>
        </>
    )
}

export default RequestCard;