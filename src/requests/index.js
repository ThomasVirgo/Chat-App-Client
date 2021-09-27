import axios from 'axios';
const SERVER_URL = 'http://localhost:8000';

async function requestRegister(data){
    try {
        const response = await axios.post(`${SERVER_URL}/auth/register/`, data)
        return [true, response.data]
    } catch (error) {
        return [false, error.response.data]
    }
}

async function requestLogin(data){
    try {
        const response = await axios.post(`${SERVER_URL}/auth/login/`, data)
        return [true, response.data]
    } catch (error) {
        return [false, error.response.data]
    }
}

async function getUserData(username){
    try {
        const response = await axios.get(`${SERVER_URL}/api/users/${username}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

async function getAllUsers(){
    try {
        const response = await axios.get(`${SERVER_URL}/api/users`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

async function sendFriendRequest(data){
    try {
        const response = await axios.post(`${SERVER_URL}/api/friend-requests`, data)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

async function getFriendRequests(username){
    try {
        const response = await axios.get(`${SERVER_URL}/api/friend-requests/${username}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

async function RespondToFriendRequest(data, id){
    try {
        const response = await axios.patch(`${SERVER_URL}/api/friend-request/${id}`, data)
        return response.data
    } catch (error) {
        return error.response.data
    }
}
async function getFriends(id){
    try {
        const response = await axios.get(`${SERVER_URL}/api/friends/${id}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}



export { requestRegister, requestLogin, getUserData, getAllUsers, sendFriendRequest, getFriendRequests, RespondToFriendRequest, getFriends }