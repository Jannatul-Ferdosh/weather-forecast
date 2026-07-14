import { Box, HStack } from "@chakra-ui/react";
import ColorMode from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Box py={{ base: 6, md: 10 }}>
      <HStack
        gap={4}
        shadow="xl"
        borderRadius="2xl"
        px={{ base: 4, md: 6 }}
        py={{ base: 3, md: 4 }}
        bg="cardBg"
        borderWidth="1px"
        borderColor="cardBorder"
      >
        <ColorMode />
        <SearchInput />
      </HStack>
    </Box>
  );
};

export default NavBar;
