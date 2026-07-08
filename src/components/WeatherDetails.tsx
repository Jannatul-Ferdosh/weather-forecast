import useWeather from "@/hooks/useWeather";
import { Box, Spinner,Text } from "@chakra-ui/react";
import { TbTemperatureSun } from "react-icons/tb";
import { MdOutlineAir } from "react-icons/md";

const WeatherDetails = () => {
  const { data, error, isLoading } = useWeather();
  if (error) return null;
  if (isLoading) return <Spinner />;
  
  return <Box display="grid" justifyContent="center" gap={5} shadow="lg" borderRadius={20} padding={10} margin={10} bgColor="#03a7f3">
    <Text>Weather : {data?.weather[0].description}</Text>
    <Text>Humidity : {data?.main.humidity}%</Text>
    <Text>Feels Like : {data?.main.feels_like}°C</Text>
    <Text style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><TbTemperatureSun /> {data?.main.temp}°C</Text>
    <Text style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MdOutlineAir/>{data?.wind.speed} km/h</Text>
  </Box>;
};

export default WeatherDetails;
