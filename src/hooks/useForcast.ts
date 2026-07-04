import ForecastAPI from "@/services/forecastApi";
import useWeatherStore from "@/store";
import { useQuery } from "@tanstack/react-query";

const forecastApi = new ForecastAPI();

const useForecast = () =>{
    const city = useWeatherStore(s => s.city);
    return useQuery({
        queryKey: [city],
        queryFn: () => forecastApi.getAll({
            params: {
                q: city,
                units: "metric",
            }
        }),
        enabled: !!city,
    })
}

export default useForecast;