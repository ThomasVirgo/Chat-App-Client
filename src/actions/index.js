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


export { updateSockets, initUsers, updateUsers, removeUser };