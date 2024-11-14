import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Marquees = () => {
  return (
    <section className="bg-gray-200">
      <div className="flex gap-5 items-center p-2">
        <p className="bg-[#D72050] text-xl font-medium px-6 py-2 text-white">
          Latest
        </p>
        <Marquee className="text-lg font-semibold flex gap-10">
          <Link>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
          <Link>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
          <Link>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
        </Marquee>
      </div>
    </section>
  );
};

export default Marquees;
