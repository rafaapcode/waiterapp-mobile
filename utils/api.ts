import axios from "axios";

const api  = axios.create({
  baseURL: 'http://192.168.18.5:3001'
});

export default api;