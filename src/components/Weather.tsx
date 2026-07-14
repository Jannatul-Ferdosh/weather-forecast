import useWeather from "@/hooks/useWeather";
import { Box, Image, Spinner, Text, HStack, VStack, Heading } from "@chakra-ui/react";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunsets.png";

const Weather = () => {
  const { data, error, isLoading } = useWeather();
  if (error) return null;
  if (isLoading) return <Spinner size="xl" />;

  if (!data) return null;

  const sunriseUnix = data.sys.sunrise * 1000;
  const sunsetUnix = data.sys.sunset * 1000;
  const sunriseTime = new Date(sunriseUnix).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunsetTime = new Date(sunsetUnix).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const iconcode = data.weather[0].icon;
  const dayIcon = iconcode.endsWith('n') ? iconcode.replace('n', 'd') : iconcode;
  const url = `https://openweathermap.org/img/wn/${dayIcon}@4x.png`;

  return (
    <VStack
      gap={4}
      shadow="xl"
      borderRadius="3xl"
      p={{ base: 6, md: 8 }}
      bg="cardBg"
      borderWidth="1px"
      borderColor="cardBorder"
      align="center"
    >
      <Heading size="2xl" textAlign="center">
        {data.name}
      </Heading>
      <Text fontSize="xl" color="subtleText" textTransform="capitalize" textAlign="center">
        {data.weather[0].description}
      </Text>

      <HStack gap={2} align="center">
        <Image src={url} boxSize="120px" objectFit="contain" />
        <Text fontSize="7xl" fontWeight="bold" lineHeight="1">
          {Math.round(data.main.temp)}°
        </Text>
      </HStack>

      <HStack gap={6} mt={2}>
        <VStack gap={1}>
          <Image src={sunrise} boxSize="32px" objectFit="contain" />
          <Text fontSize="sm" color="subtleText">Sunrise</Text>
          <Text fontWeight="semibold">{sunriseTime}</Text>
        </VStack>
        <Box w="1px" h="40px" bg="cardBorder" />
        <VStack gap={1}>
          <Image src={sunset} boxSize="32px" objectFit="contain" />
          <Text fontSize="sm" color="subtleText">Sunset</Text>
          <Text fontWeight="semibold">{sunsetTime}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Weather;
