import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";

// routes
import { routes } from "./utils/routes";

//Screens frontEnd
import Login from "./pages/Login";
import Register from "./pages/Register";

// NOTFOUND
// import NotFound from "./screens/frontEnd/notFound/NotFound";

function Routing(props) {
  //login, registration, account, messages, favourites, booking

  return (
    <Routes>
      <Route path={routes.loginPage} element={<Login />} />
      <Route path={routes.registerPage} element={<Register />} />
      <Route path={"/"} element={<App />} />

      {/* NICE TO HAVE: <Route path:"travelTalks" element <TravelTalks> /> */}

      {/* !!! we need to change the element passed to path "*" */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default Routing;
