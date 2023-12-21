import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://amazon-backend-v6cz.onrender.com',
});
export default instance;
