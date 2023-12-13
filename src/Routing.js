import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

// routes
import { routes } from "./utils/routes";

//Screens frontEnd
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";

// NOTFOUND
// import NotFound from "./screens/frontEnd/notFound/NotFound";

function Routing(props) {
  //login, registration, account, messages, favourites, booking

  return (
    <ChakraProvider>
      <Box bg="#121212" minHeight="100vh">
        <Routes>
          <Route path={routes.layoutPage} element={<Layout />}>
            <Route path={routes.homePage} element={<Homepage />} />
            <Route path={routes.projects} element={<Projects />} />
            <Route path={routes.contactsPage} element={<Contacts />} />
          </Route>
          {/* NICE TO HAVE: <Route path:"travelTalks" element <TravelTalks> /> */}
          {/* !!! we need to change the element passed to path "*" */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default Routing;
