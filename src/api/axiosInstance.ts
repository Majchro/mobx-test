import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://64c3b31867cfdca3b66021ed.mockapi.io',
});

export default axiosInstance;
