import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: `http://localhost:8000/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const axiosJWT = axios.create({
  baseURL: `http://localhost:8000/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);
