import axios from "axios";

export  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
})
// intercept each request and add a bearer token
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("login_token");
    config.headers.Authorization = `Bearer ${token}`;
    return config
})
axiosInstance.interceptors.request.use(
    (response) => {
        return response
    }
    ,
    (error) => {
        const {response } = error;
        if (response.status === 401){
            localStorage.removeItem("login_token");
        }
        throw error;
    }
)