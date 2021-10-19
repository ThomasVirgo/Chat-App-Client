const updateSockets = (data) => {
    return {
        type: 'UPDATE_SOCKETS',
        payload: data
    }
}

const initUsers = (users) => {
    return {
        type: 'INIT_USERS',
        payload: users,
    }
}

const updateUsers = (user) => {
    return {
        type: 'UPDATE_USERS',
        payload: user
    }
}

const removeUser = (user) => {
    return {
        type: 'REMOVE_USER',
        payload: user.userID
    }
}

const initMessages = (messages) => {
    return {
        type: 'INIT_MESSAGES',
        payload: messages,
    }
}

const addMessage = (message) => {
    return {
        type: 'ADD_MESSAGE',
        payload: message
    }
}

const changeFriend = (friendID) => {
    return {
        type: 'CHANGE_FRIEND',
        payload: friendID
    }
}

const initUserLists = (data) => {
    return {
        type: 'INIT_USER_LISTS',
        payload: data
    }
}

const addFriendRequest = (to_user) => {
    return {
        type: 'ADD_FRIEND_REQUEST',
        payload: {
            'to_user': to_user,
            'is_complete': false
        }
    }
}


export { updateSockets, initUsers, updateUsers, removeUser, initMessages, addMessage, changeFriend, initUserLists, addFriendRequest };