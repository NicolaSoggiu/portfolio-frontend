import React from "react";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HStack, Image, Link as ChakraLink } from "@chakra-ui/react";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const goTo = (page) => {
    navigate(page);
    onClose();
  };

  return (
    <HStack
      className="navbarContainer"
      w="100%"
      bg="#121212"
      borderBottom="2px solid #FAF446"
      position="fixed"
      zIndex="1000"
    >
      <ChakraLink onClick={() => goTo(routes.homePage)}>
        <Image src={logo} boxSize="130px" />
      </ChakraLink>
      <IconButton
        ml="auto"
        mr="20px"
        aria-label="Toggle Menu"
        icon={<FontAwesomeIcon icon={faBars} />}
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#121212">
          <DrawerCloseButton color="#FAF446" />
          <DrawerHeader color="#FAF446">Menu voice's</DrawerHeader>
          <DrawerBody>
            <HStack
              className="voice"
              spacing={4}
              flex={1}
              justifyContent="space-around"
            >
              <ChakraLink
                onClick={() => goTo(routes.homePage)}
                color="#FAF446"
                _hover={{ textDecoration: "none" }}
              >
                Home
              </ChakraLink>
              <ChakraLink
                onClick={() => goTo("projects")}
                color="#FAF446"
                _hover={{ textDecoration: "none" }}
              >
                Projects
              </ChakraLink>
              <ChakraLink
                onClick={() => goTo("experience")}
                color="#FAF446"
                _hover={{ textDecoration: "none" }}
              >
                Experience
              </ChakraLink>
              <ChakraLink
                onClick={() => goTo("contacts")}
                color="#FAF446"
                _hover={{ textDecoration: "none" }}
              >
                Contacts
              </ChakraLink>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <HStack
        className="voice"
        spacing={4}
        flex={1}
        justifyContent="space-around"
        display={{ base: "none", md: "flex" }}
      >
        <ChakraLink
          onClick={() => goTo(routes.homePage)}
          color="#FAF446"
          _hover={{ textDecoration: "none" }}
        >
          Home
        </ChakraLink>
        <ChakraLink
          onClick={() => goTo("projects")}
          color="#FAF446"
          _hover={{ textDecoration: "none" }}
        >
          Projects
        </ChakraLink>
        <ChakraLink
          onClick={() => goTo("experience")}
          color="#FAF446"
          _hover={{ textDecoration: "none" }}
        >
          Experience
        </ChakraLink>
        <ChakraLink
          onClick={() => goTo("contacts")}
          color="#FAF446"
          _hover={{ textDecoration: "none" }}
        >
          Contacts
        </ChakraLink>
      </HStack>
    </HStack>
  );
};

export default NavBar;
