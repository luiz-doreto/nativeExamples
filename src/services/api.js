import axios from 'axios';

const api = axios.create({
  baseURL: 'https://burguershop-api.azurewebsites.net/api/',
});

export default api;
