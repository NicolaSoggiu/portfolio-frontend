import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Login = () => {
  const params = useParams();
  console.log("params", params);
  const location = useLocation();
  console.log("location", location);
  return <div>Ciao sono la login page</div>;
};

export default Login;
