import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/forecast",
    params: {
        appid: "fcf1db3317f93daa417565a886921676",
    },
})

class ForecastAPI{
    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get("",config)
        .then(res => res.data)
        
    }
}

export default ForecastAPI;