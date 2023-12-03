import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.jpg";

const NavBar = () => {
  return (
    <Box w="100%" bg="#121212" borderBottom="2px solid #FAF446">
      <HStack>
        <Image src={logo} boxSize="170px" />
        <Text></Text>
      </HStack>
    </Box>
  );
};

export default NavBar;
