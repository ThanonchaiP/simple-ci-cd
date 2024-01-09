import Axios from 'axios';

import { API_ENDPOINT_ONEFENCE_BASE_URL } from '@/config/endpoint';

export const apiClient = Axios.create({
  baseURL: API_ENDPOINT_ONEFENCE_BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response?.data?.body ?? response?.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
