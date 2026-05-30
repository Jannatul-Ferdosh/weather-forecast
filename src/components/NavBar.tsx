import { Box, HStack } from "@chakra-ui/react";
import ColorMode from "./ColorModeSwitch";

const NavBar = () => {
  return <Box shadow="lg" borderRadius="5px" padding={2} mx={250} my={10} >
    <ColorMode/>
  </Box>
};

export default NavBar;
