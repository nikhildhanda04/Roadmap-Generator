import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://roadmap-backend-n5b0.onrender.com' ,
  withCredentials: true,
});

export default instance;