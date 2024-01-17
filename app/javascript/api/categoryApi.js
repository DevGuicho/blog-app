import axios from 'axios';

const categoryApi = axios.create({
  baseURL: 'http://localhost:5000/api/v1/categories',
});

export default categoryApi;
