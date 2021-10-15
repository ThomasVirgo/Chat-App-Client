import { useSelector } from 'react-redux'

function isUserActive(users, id){
    console.log('checking user activity')
    for (let i=0; i<users.length; i++){
        let current = users[i]
        if (current.userID == id){
            return [true, current.socketId]
        }
    }
    return [false, 'unavailable']
}

function findUserId(users, socketId){
    for (let i=0; i<users.length; i++){
        let current = users[i]
        if (current.socketId == socketId){
            return current.userID
        }
    }
    return false
}

export { isUserActive, findUserId }