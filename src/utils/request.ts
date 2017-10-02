import axios from 'axios';

axios.defaults.timeout = 5000;
const api_urls = {
  development: 'http://127.0.0.1:3000/api/v1',
  production: 'https://pure-spire-62269.herokuapp.com/api/v1',
}
axios.defaults.baseURL = api_urls[process.env.NODE_ENV];

export default axios;