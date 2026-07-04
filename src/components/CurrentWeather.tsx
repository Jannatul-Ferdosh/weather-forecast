import useWeather from "@/hooks/useWeather";
import { GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import WeatherDetails from "./WeatherDetails";
import Weather from "./Weather";

const CurrentWeather = () => {
  const { data, error, isLoading } = useWeather();
  if (error) return null;
  if (isLoading) return <Spinner />;
  if (data)
    return (
      <>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          display={{ base: "grid", md: "flex" }}
          justifyContent="center"
        >
          <GridItem width={{ base: "100%", md: "450px" }}>
            <Weather />
          </GridItem>
          <GridItem width={{ base: "100%", md: "500px" }}>
            <WeatherDetails />
          </GridItem>
        </SimpleGrid>
      </>
    );
  else return null;
};

export default CurrentWeather;
