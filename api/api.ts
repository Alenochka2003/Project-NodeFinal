import axios from "axios";
export const $api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

// const base_url = "http://localhost:5000/api";

// export  const $api = axios.create({ baseURL: base_url });

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    // config.headers.Authotization = token ? `Bearer ${token}` : ''
    return config;
}, (error) => {
    return Promise.reject(error);
});
