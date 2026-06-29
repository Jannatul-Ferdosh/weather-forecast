import { HStack } from "@chakra-ui/react";
import ColorMode from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import CurrentWeather from "./CurrentWeather";

const NavBar = () => {
  return (
    <>
    <HStack shadow="lg" borderRadius={5} padding={5} mx={20} my={10}>
      <ColorMode />
      <SearchInput />
    </HStack>
    <CurrentWeather/>
    </>
  );
};

export default NavBar;
