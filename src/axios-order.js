import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-10e18.firebaseio.com/'
});

export default instance;