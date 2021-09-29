const updateSockets = (data) => {
    return {
        type: 'UPDATE_SOCKETS',
        payload: data
    }
}



export { updateSockets };