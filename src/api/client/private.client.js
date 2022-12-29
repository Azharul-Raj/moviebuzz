import axios from "axios";
import queryString from "query-string";


const baseURL = "http://127.0.0.1:5173/";

const privateClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: params => queryString.stringify(params)
    }
})

privateClient.interceptors.request.use(async config => {
    return {
        ...config,
        headers: {
            "content-type": "application/json",
            "authorization":`Bearer ${localStorage.getItem("token")}`
        }
    }
})

privateClient.interceptors.response.use(response => {
    if (response) {
        return response.data;
    }
    return response;
}, (err)=>{
    console.log(err);
})

export default privateClient;