import { Box } from "@chakra-ui/react";
import CurrentWeather from "./components/CurrentWeather";
import Forcast from "./components/Forcast";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Box minH="100vh" bg="pageBg" color="textColor">
      <NavBar />
      <CurrentWeather />
      <Forcast />
    </Box>
  );
};

export default App;
