import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
reportWebVitals();
