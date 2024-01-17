import axios from 'axios';

const commentApi = axios.create({
  baseURL: 'http://localhost:5000/api/v1/articles',
});

export default commentApi;
