import {
  Box,
  HStack,
  Image,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../utils/routes";
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goTo = (page) => (e) => {
    navigate(page, {
      state: { from: location.pathname, ParamentroUno: "path test" },
    });
  };

  return (
    <Box w="100%" bg="#121212" borderBottom="2px solid #FAF446">
      <HStack spacing={4} align="center">
        <Image src={logo} boxSize="170px" />
        <Stack direction="row" spacing={4}>
          <ChakraLink
            onClick={goTo(routes.homePage)}
            color="#FAF446"
            _hover={{ textDecoration: "none" }}
          >
            Home
          </ChakraLink>
          <ChakraLink
            onClick={goTo("contacts")}
            color="#FAF446"
            _hover={{ textDecoration: "none" }}
          >
            Contacts
          </ChakraLink>
          <ChakraLink
            onClick={goTo("projects")}
            color="#FAF446"
            _hover={{ textDecoration: "none" }}
          >
            Projects
          </ChakraLink>
        </Stack>
      </HStack>
    </Box>
  );
};

export default NavBar;
