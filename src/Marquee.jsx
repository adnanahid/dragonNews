import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Marquees = ({ allData }) => {
  console.log(allData);
  return (
    <section className="bg-gray-200">
      <div className="flex gap-5 items-center p-2">
        <p className="bg-[#D72050] text-xl font-medium px-6 py-2 text-white">
          Latest
        </p>
        <Marquee className="text-lg font-semibold flex">
          {allData.map((news) => (
            <Link to={`/details/${news._id}`} className="px-5">{news.title}</Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Marquees;
