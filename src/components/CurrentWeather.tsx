import useWeather from "@/hooks/useWeather";
import { Spinner } from "@chakra-ui/react";
import WeatherDetails from "./WeatherDetails";
import Weather from "./Weather";

const CurrentWeather = () => {
  const { data, error, isLoading } = useWeather();
  if (error) return null;
  if (isLoading) return <Spinner />;
  if(data) return (
    <Weather/>
  );
  else return null;
};

export default CurrentWeather;
