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


export { requestRegister, requestLogin, getUserData }