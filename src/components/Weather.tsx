import useWeather from '@/hooks/useWeather';
import { Box, Image, Spinner,Text } from '@chakra-ui/react';
import sunrise from '../assets/sunrise.png';
import sunset from '../assets/sunsets.png'


const Weather = () => {
  const { data, error, isLoading } = useWeather();
  if (error) return null;
  if (isLoading) return <Spinner />;

  const SunriseUnixTime = data?.sys.sunrise * 1000;
  const dateObject1 = new Date(SunriseUnixTime);
  const SunriseTime = dateObject1.toLocaleTimeString();

  const SunsetUnixTime = data?.sys.sunset * 1000;
  const dateObject2 = new Date(SunsetUnixTime);
  const SunsetTime = dateObject2.toLocaleTimeString();

  return (
    <Box display="grid" justifyContent="center" shadow="lg" borderRadius={20} padding={5} margin={10} bgColor="#c5fafe">
        <Text display="flex" justifyContent="center" marginBottom={5}>{data?.name}</Text>
        <Text>{SunriseTime}</Text>
        <Image src={sunrise} boxSize="50px" objectFit="cover" margin={2}/>
        <Text>{SunsetTime}</Text>
        <Image src={sunset} boxSize="50px" objectFit="cover" margin={2}/>
    </Box>
  )
}

export default Weather
