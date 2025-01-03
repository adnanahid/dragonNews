import moment from "moment";
import React from "react";
import Logo from "../src/assets/logo.png"

const Header = () => {
  return (
    <div>
      <section>
        <img className="mx-auto py-3" src={Logo} alt="" />
        <h2 className="text-lg text-center text-[#706F6F] py-1">
          Journalism Without Fear or Favour
        </h2>
        <h2 className="text-lg text-center text-[#706F6F] py-1">
          {moment().format("dddd, MMMM D YYYY")}
        </h2>
      </section>
    </div>
  );
};

export default Header;
