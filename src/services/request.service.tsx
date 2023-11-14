import axios, { AxiosInstance } from "axios";

const request: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080"
});

export default request;