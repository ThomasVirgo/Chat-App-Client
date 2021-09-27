import React, { useEffect, useState } from 'react';
import { Nav } from '../../layout'
import { UserCard } from '../../components';
import { getAllUsers, getFriendRequests } from '../../requests';

const Friends = () => {
    const [users, setUsers] = useState([])
    const [friendRequests, setFriendRequests] = useState([])
    useEffect(async ()=>{
        const userList = await getAllUsers();
        const requestsList = await getFriendRequests(localStorage.getItem('username'))
        console.log(userList)
        setUsers(userList)
        setFriendRequests(requestsList)
        console.log(requestsList)
    }, [])

    const firstName = localStorage.getItem('first_name')
    const lastName = localStorage.getItem('last_name')

    const userCardStyle = {
        padding: "10px",
        margin: "auto",
        marginBottom: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        background: "rgba(255, 255, 255, 0.65)",
        borderRadius: "5px"
    }

    const userCards = users.map((item,idx)=> {
        if (item.first_name != firstName && item.last_name != lastName){
            return <div key={idx} style={userCardStyle}><UserCard data={item}/></div>
        }
    })
    const requestsCards = friendRequests.map((item, idx)=><div key={idx} style={userCardStyle}>{item.request_name}</div>)
    return (
        <>
        <Nav/>
        <h1>All Users:</h1>
        {userCards}
        <h1>Your friends list:</h1>
        <h1>Friend Requests:</h1>
        {requestsCards}
        </>
    )
}

export default Friends;