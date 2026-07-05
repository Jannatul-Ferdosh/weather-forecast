import useForecast from "@/hooks/useForcast";
import { GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import ForcastHeading from "./ForcastHeading";
import ForeCastBox from "./ForeCastBox";

const Forcast = () => {
  const { data, error, isLoading } = useForecast();
  const forecastBox = [0, 8, 16, 24, 32];

  if (error) return null;
  if (isLoading) return <Spinner />;
  console.log(data);
  if (data) {
    return (
      <>
        <ForcastHeading />
        <SimpleGrid
          columns={{ base: 1, md: 3, lg: 5 }}
          display={{ base: "grid", lg: "flex" }}
          justifyContent="center"
        >
          {forecastBox.map((i) => (
            <GridItem width={{ base: "100%", md: "100%", lg: "220px" }}>
              <ForeCastBox i={i} />
            </GridItem>
          ))}
        </SimpleGrid>
      </>
    );
  }
};

export default Forcast;
