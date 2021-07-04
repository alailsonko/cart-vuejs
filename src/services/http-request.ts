import axios, { AxiosInstance } from 'axios';

const httpRequest: AxiosInstance = axios.create({
  baseURL: 'https://api.mercadolibre.com/',
});

export default httpRequest;
