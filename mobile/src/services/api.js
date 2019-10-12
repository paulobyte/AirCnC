import axios from 'axios';
import localhost from '../config/localhost';

const api = axios.create({
  baseURL: `http://${localhost.LocalHost}:3333`,
});

export default api;
