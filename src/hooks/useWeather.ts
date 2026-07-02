import APIClient from "@/services/apiClients";
import useWeatherStore from "@/store";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient();

const useWeather = () =>{
  const city = useWeatherStore(s => s.city);
  return useQuery({
    queryKey: [city],
    queryFn: () => apiClient.getAll({
      params:{
        q: city,
        units: "metric",
      }
    }),
    enabled: !!city,
  });
}

export default useWeather;