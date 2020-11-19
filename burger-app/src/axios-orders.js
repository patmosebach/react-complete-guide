import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d5d8f.firebaseio.com/'
})

export default instance;