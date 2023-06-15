import axios from 'axios';

const token = 'HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF'

export const baseURL = 'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io';
const api = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    'Authorization': `Bearer ${token}` 
  },
});


export default api;
