import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://connections-api.goit.global/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setToken = token => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeToken = () => {
  delete apiClient.defaults.headers.common['Authorization'];
};
