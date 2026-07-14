import useWeather from "@/hooks/useWeather";
import { GridItem, SimpleGrid, Box, Spinner, Text } from "@chakra-ui/react";
import WeatherDetails from "./WeatherDetails";
import Weather from "./Weather";

const CurrentWeather = () => {
  const { data, error, isLoading } = useWeather();
  if (error) return null;
  if (isLoading) return (
    <Box display="flex" justifyContent="center" py={20}>
      <Spinner size="xl" />
    </Box>
  );
  if (!data) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="50vh"
      >
        <Text fontSize="xl" color="subtleText">
          Search for a city to see weather information
        </Text>
      </Box>
    );
  }

  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      gap={{ base: 4, md: 6 }}
      maxW="1000px"
      mx="auto"
      mb={10}
    >
      <GridItem>
        <Weather />
      </GridItem>
      <GridItem>
        <WeatherDetails />
      </GridItem>
    </SimpleGrid>
  );
};

export default CurrentWeather;
