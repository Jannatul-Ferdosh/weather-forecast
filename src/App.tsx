import { Box } from "@chakra-ui/react";
import CurrentWeather from "./components/CurrentWeather";
import Forcast from "./components/Forcast";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Box minH="100vh" bg="pageBg" color="textColor">
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }} pb={16}>
        <NavBar />
        <CurrentWeather />
        <Forcast />
      </Box>
    </Box>
  );
};

export default App;
