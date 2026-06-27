import useWeather from "@/hooks/useWeather";
import { Spinner } from "@chakra-ui/react";

const Weather = () => {
  const { data, error, isLoading } = useWeather();
  if (error) return null;
  if (isLoading) return <Spinner />;
  console.log(data);
  return (
    <>
      <p>{data?.main.temp}°C</p>
    </>
  );
};

export default Weather;
