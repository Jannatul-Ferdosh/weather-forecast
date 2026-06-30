import { HStack } from "@chakra-ui/react";
import ColorMode from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <>
    <HStack shadow="lg" borderRadius={20} padding={5} mx={20} my={10} bgColor="#d8f0fd">
      <ColorMode />
      <SearchInput />
    </HStack>
    </>
  );
};

export default NavBar;
