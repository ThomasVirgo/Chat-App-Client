import React, { useEffect, useState } from 'react';
import { Nav } from '../../layout'
import { UserCard } from '../../components';
import { getAllUsers } from '../../requests';

const Friends = () => {
    const [users, setUsers] = useState([])
    useEffect(async ()=>{
        const userList = await getAllUsers();
        console.log(userList)
        setUsers(userList)
    }, [])

    const userCards = users.map((item,idx)=> <div key={idx}><UserCard data={item}/></div>)
    return (
        <>
        <Nav/>
        <h1>All Users:</h1>
        {userCards}
        <h1>Your friends list:</h1>
        </>
    )
}

export default Friends;