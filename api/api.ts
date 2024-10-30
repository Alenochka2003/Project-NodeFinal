import axios from "axios";


const base_url = "http://localhost:5001/api";

export  const $api = axios.create({ baseURL: base_url });

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); //
    config.headers.Authotization = token ? `Bearer ${token}` : ''
    return config;
});