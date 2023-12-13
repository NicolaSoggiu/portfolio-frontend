import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

// routes
import { routes } from "./utils/routes";

//Screens frontEnd
import Homepage from "./components/Homepage/Homepage";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import { Box, ChakraProvider } from "@chakra-ui/react";

function Routing(props) {
  return (
    <ChakraProvider>
      <Box bg="#121212" minHeight="100vh">
        <Routes>
          <Route path={routes.layoutPage} element={<Layout />}>
            <Route path={routes.homePage} element={<Homepage />} />
            <Route path={routes.projects} element={<Projects />} />
            <Route path={routes.contactsPage} element={<Contacts />} />
          </Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default Routing;
