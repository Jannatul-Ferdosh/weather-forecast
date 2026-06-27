import APIClient from "@/services/apiClients";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/weather");

const useWeather = () => useQuery({
    queryKey: [],
    queryFn: () => apiClient.getAll(),
  });

  export default useWeather;