import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://connections-api.goit.global/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
