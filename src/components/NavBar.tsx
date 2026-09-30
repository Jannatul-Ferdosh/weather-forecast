import { Box, HStack } from "@chakra-ui/react";
import ColorMode from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Box padding={{ base: "30px", md: "50px" }}>
      <HStack shadow="lg" borderRadius={20} padding={5} bgColor="#bee3f8">
        <ColorMode />
        <SearchInput />
      </HStack>
    </Box>
  );
};

export default NavBar;
