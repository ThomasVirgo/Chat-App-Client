import React from 'react';

const UserCard = ({data}) => {
    return (
        <>
        <h1>{`${data.first_name} ${data.last_name}`}</h1>
        <button>Add Friend</button>
        </>
    )
}

export default UserCard;