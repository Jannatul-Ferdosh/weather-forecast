import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    params: {
        appid: "fcf1db3317f93daa417565a886921676",
    },
})

class APIClient{
    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get("",config)
        .then(res => res.data)
    }
}

export default APIClient;