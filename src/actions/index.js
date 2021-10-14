const updateSockets = (data) => {
    return {
        type: 'UPDATE_SOCKETS',
        payload: data
    }
}

const updateUsers = (user) => {
    return {
        type: 'UPDATE_USERS',
        payload: user
    }
}



export { updateSockets, updateUsers };