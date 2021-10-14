import React, { useEffect, useState } from 'react';
import { Nav } from '../../layout'
import { UserCard, RequestCard } from '../../components';
import { getAllUsers, getFriendRequests, getFriends } from '../../requests';

const Friends = () => {
    const [users, setUsers] = useState([])
    const [friendRequests, setFriendRequests] = useState([])
    const [friends, setFriends] = useState([])
    useEffect(async ()=>{
        const userList = await getAllUsers();
        const requestsList = await getFriendRequests(localStorage.getItem('username'))
        const friendList = await getFriends(localStorage.getItem('user_id'))
        setUsers(userList)
        setFriendRequests(requestsList)
        setFriends(friendList)
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
            return <div key={idx} style={userCardStyle}><UserCard data={item} friend={false}/></div>
        }
    })

    const requestsCards = friendRequests.map((item, idx)=>
    {
        if (!item.is_complete){
            return <div key={idx} style={userCardStyle}><RequestCard data={item}/></div>
        }
    })

    const friendCards = friends.map((item,idx)=><div key={idx} style={userCardStyle}><UserCard data={item} friend={true}/></div>)
    return (
        <>
        <Nav socket = {socket}/>
        <h1>Add a friend:</h1>
        {userCards}
        <h1>Your friends list:</h1>
        {friendCards}
        <h1>Friend Requests:</h1>
        {requestsCards}
        </>
    )
}

export default Friends;