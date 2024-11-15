import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Left = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold p-3">All category</h2>
      <div className="space-y-7 my-4 mx-2">
        {categories.map((item) => (
          <NavLink
            to={`category/${item.id}`}
            className="text-xl font-semibold text-gray-600 bg-base-100 btn w-full"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Left;
