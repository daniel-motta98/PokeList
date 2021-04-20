import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'App-Token': 'url',
    Referer: 'https://pokeapi.co/docs/v2',
  },
});

export default api;
