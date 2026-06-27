import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
        q: "Khulna",
        appid: "fcf1db3317f93daa417565a886921676",
    },
})

class APIClient{
    endpoint: string;

    constructor (endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = () => {
        return axiosInstance
        .get(this.endpoint)
        .then(res => res.data)
    }
}

export default APIClient;