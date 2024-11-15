import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Marquees from "./Marquee";
import Navbar from "./Navbar";

const Root = () => {
  const allData = useLoaderData()
  return (
    <div>
      <Header></Header>
      <Marquees allData={allData}></Marquees>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
