function isUserActive(socketInfo, id){
    console.log('checking user activity')
    for (let i=0; i<socketInfo.length; i++){
        let current = socketInfo[i]
        if (current['user_id'] == id){
            return [true, current['socket_id']]
        }
    }
    return [false, 'unavailable']
}

function findUserId(socketInfo, socketId){
    for (let i=0; i<socketInfo.length; i++){
        let current = socketInfo[i]
        if (current['socket_id'] == socketId){
            return current['user_id']
        }
    }
    return false
}

export { isUserActive, findUserId }