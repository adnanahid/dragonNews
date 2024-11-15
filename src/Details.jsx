import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { BsShareFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import Rating from "react-rating";
import Right from "./Right";

const Details = () => {
  const data = useLoaderData();
  const { _id } = useParams();
  const findData = data.find((news) => news._id === _id);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12 col-span-9">
        <div className="flex justify-between items-center px-6 py-3 bg-gray-900 text-white">
          <div className="flex items-center bg-gray-900 text-white">
            <img
              src={findData.author.img}
              alt={findData.author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">{findData.author.name}</p>
              <p className="text-sm text-gray-300">
                {new Date(
                  findData.author.published_date
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="space-x-5">
            <button className="ml-auto text-gray-300 hover:text-gray-400">
              <BsShareFill />
            </button>
            <button className="ml-auto text-gray-300 hover:text-gray-400">
              <FaBookmark />
            </button>
          </div>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold">{findData.title}</h2>
          <img
            src={findData.image_url}
            alt={findData.title}
            className="my-4 w-full h-64 object-cover rounded"
          />
          <p className="text-gray-600 text-sm mb-2">{findData.details}</p>
        </div>
        <div className=" px-6 py-4">
          <button onClick={() => navigate(-1)} className="bg-gray-700 text-white font-semibold text-xl px-6 py-1 mx-2">
            Back to Home
          </button>
        </div>
      </div>
      <div className="col-span-3">
        <Right></Right>
      </div>
    </div>
  );
};

export default Details;
