import useWeather from "@/hooks/useWeather";
import { Box, Spinner, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import { TbTemperatureSun } from "react-icons/tb";
import { MdOutlineAir, MdSpeed, MdWaterDrop, MdOutlineCloud, MdVisibility } from "react-icons/md";

const DetailItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <HStack
    gap={3}
    p={2}
    px={4}
    borderRadius="xl"
    bg="primary.50"
    _dark={{ bg: "primary.700" }}
    borderWidth="1px"
    borderColor="cardBorder"
    w="100%"
    justifyContent="center"
    alignItems="center"
  >
    <Box color="primary.500" _dark={{ color: "primary.300" }} fontSize="2xl">
      {icon}
    </Box>
    <Box textAlign="center">
      <Text fontSize="sm" color="subtleText">{label}</Text>
      <Text fontWeight="bold" fontSize="lg">{value}</Text>
    </Box>
  </HStack>
);

const WeatherDetails = () => {
  const { data, error, isLoading } = useWeather();
  if (error) return null;
  if (isLoading) return <Spinner size="xl" />;

  if (!data) return null;

  return (
    <Box
      shadow="xl"
      borderRadius="3xl"
      p={{ base: 6, md: 8 }}
      bg="cardBg"
      borderWidth="1px"
      borderColor="cardBorder"
      h="full"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
        Weather Details
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        <DetailItem
          icon={<TbTemperatureSun />}
          label="Feels Like"
          value={`${Math.round(data.main.feels_like)}°C`}
        />
        <DetailItem
          icon={<MdWaterDrop />}
          label="Humidity"
          value={`${data.main.humidity}%`}
        />
        <DetailItem
          icon={<MdOutlineAir />}
          label="Wind Speed"
          value={`${data.wind.speed} km/h`}
        />
        <DetailItem
          icon={<MdSpeed />}
          label="Pressure"
          value={`${data.main.pressure} hPa`}
        />
        <DetailItem
          icon={<MdOutlineCloud />}
          label="Clouds"
          value={`${data.clouds.all}%`}
        />
        <DetailItem
          icon={<MdVisibility />}
          label="Visibility"
          value={`${(data.visibility / 1000).toFixed(1)} km`}
        />
      </SimpleGrid>
    </Box>
  );
};

export default WeatherDetails;
