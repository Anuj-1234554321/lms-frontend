import axios from 'axios';
const axiosInstance = axios.create();
BaseUrl = 'http://localhost:5000/api/v1/';
axiosInstance.axios.defaults.baseURL = BaseUrl;
 axiosInstance.WithoutCredentials = true;
 export default axiosInstance;