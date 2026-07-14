import useForecast from "@/hooks/useForcast";
import { GridItem, SimpleGrid, Box, Spinner } from "@chakra-ui/react";
import ForcastHeading from "./ForcastHeading";
import ForeCastBox from "./ForeCastBox";

const Forcast = () => {
  const { data, error, isLoading } = useForecast();
  const forecastBox = [0, 8, 16, 24, 32];

  if (error) return null;
  if (isLoading) return (
    <Box display="flex" justifyContent="center" py={10}>
      <Spinner size="xl" />
    </Box>
  );
  if (!data) return null;

  return (
    <Box mt={8}>
      <ForcastHeading />
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
        gap={{ base: 4, md: 6 }}
        maxW="1200px"
        mx="auto"
      >
        {forecastBox.map((i) => (
          <GridItem key={i}>
            <ForeCastBox i={i} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Forcast;
