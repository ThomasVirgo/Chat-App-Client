import React, { useEffect, useState } from 'react';
import { Nav } from '../../layout'
import { UserCard, RequestCard } from '../../components';
import { getAllUsers, getFriendRequests, getFriends } from '../../requests';

const Friends = ({socket}) => {
    const [users, setUsers] = useState([])
    const [friendRequests, setFriendRequests] = useState([])
    const [friends, setFriends] = useState([])
    const [tabsOpen, setTabsOpen] = useState({
        users: false,
        requests: false,
        friendsList: false
    })

    useEffect(async ()=>{
        const userList = await getAllUsers();
        const requestsList = await getFriendRequests(localStorage.getItem('username'))
        const friendList = await getFriends(localStorage.getItem('user_id'))
        console.log('User list: ', userList);
        console.log('Request list: ', requestsList);
        console.log('Friend list: ', friendList);
        setUsers(userList)
        setFriendRequests(requestsList)
        setFriends(friendList)
    }, [])

    const firstName = localStorage.getItem('first_name')
    const lastName = localStorage.getItem('last_name')
    const user_id = localStorage.getItem('user_id')

    const userCardStyle = {
        padding: "10px",
        margin: "auto",
        marginBottom: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        background: "rgba(255, 255, 255, 0.65)",
        borderRadius: "5px"
    }

    function toggleTab(tab){
        let newState = {...tabsOpen}
        newState[tab] = !newState[tab]
        setTabsOpen(newState)
    }

    function checkIfRequestPending(userObj, requests){
        let the_user_id = userObj.id
        let idx = requests.findIndex(request => request.to_user == the_user_id)
        if (idx != -1){
            let request = requests[idx]
            if (request.is_complete) {
                return false
            } else {
                return true
            }
        }
        return false
    }

    const userCards = users.map((item,idx)=> {
        if (item.first_name != firstName && item.last_name != lastName){
            let is_request_pending = checkIfRequestPending(item, friendRequests)
            return <div key={idx} style={userCardStyle}><UserCard data={item} friend={false} is_request_pending={is_request_pending}/></div>
        }
    })

    const filterRequests = friendRequests.filter(item => item.from_user != user_id)
    const requestsCards = filterRequests.map((item, idx)=>
    {
        if (!item.is_complete){
            return <div key={idx} style={userCardStyle}><RequestCard data={item}/></div>
        }
    })

    const friendCards = friends.map((item,idx)=><div key={idx} style={userCardStyle}><UserCard data={item} friend={true} is_request_pending={false}/></div>)
    return (
        <>
        <Nav socket = {socket}/>
        <h1>Add a friend <span onClick = {() => toggleTab('users')}>{tabsOpen.users ? '-' : '+'}</span></h1>
        {tabsOpen.users &&  userCards}
        <h1>Your friends list <span onClick = {() => toggleTab('friendsList')}>{tabsOpen.users ? '-' : '+'}</span></h1>
        {tabsOpen.friendsList && friendCards}
        <h1>Friend Requests <span onClick = {() => toggleTab('requests')}>{tabsOpen.users ? '-' : '+'}</span></h1>
        {tabsOpen.requests && requestsCards}
        </>
    )
}

export default Friends;