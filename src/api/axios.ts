import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://roadmap-backend-1.onrender.com'  ,
  withCredentials: true,
});

export default instance;