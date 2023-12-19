import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="App">
      <NavBar />
      <div className="layoutContainer">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
