import axios from 'axios';
import {TOKEN} from '@env'

export const baseURL = 'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io';
const api = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    'Authorization': `Bearer ${TOKEN}` 
  },
});


export default api;
