import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
