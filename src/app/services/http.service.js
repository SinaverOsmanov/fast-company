import { toast } from "react-toastify";
import config from "../config.json";
const axios = require("axios");

axios.defaults.baseURL = config.apiBaseUrl;

axios.interceptors.response.use(res => res, (error) => {
    const expecterErrors = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expecterErrors) {
        console.log(error);
        toast.error(error.response.message);
    }
    return Promise.reject(error);
});

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};

export default httpService;
