import React from "react";
import logo from "../../assets/logo.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../utils/routes";
import { Box, HStack, Image, Link as ChakraLink } from "@chakra-ui/react";
import "./NavBar.css";

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
      <HStack className="navbar" align="center">
        <ChakraLink onClick={goTo(routes.homePage)}>
          <Image src={logo} boxSize="130px" />
        </ChakraLink>
        <HStack
          spacing={4}
          className="voice"
          paddingEnd={50}
          flex={1}
          justifyContent="center"
        >
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
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
