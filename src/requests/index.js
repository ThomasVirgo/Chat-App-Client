import axios from 'axios';
const SERVER_URL = 'http://localhost:8000';

async function requestRegister(data){
    try {
        const response = await axios.post(`${SERVER_URL}/auth/register/`, data)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

async function requestLogin(data){
    try {
        const response = await axios.post(`${SERVER_URL}/auth/login/`, data)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}


export { requestRegister, requestLogin }