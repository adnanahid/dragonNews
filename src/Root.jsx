import { Outlet } from "react-router-dom";
import Header from "./Header";
import Marquees from "./Marquee";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Marquees></Marquees>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
