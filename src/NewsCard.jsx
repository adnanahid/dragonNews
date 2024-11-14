import Rating from "react-rating";
import { BsShareFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12">
      <div className="flex justify-between items-center px-6 py-3 bg-gray-900 text-white">
        <div className="flex items-center bg-gray-900 text-white">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold">{news.author.name}</p>
            <p className="text-sm text-gray-300">
              {new Date(news.author.published_date).toLocaleDateString()}
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
        <h2 className="text-xl font-bold">{news.title}</h2>
        <img
          src={news.image_url}
          alt={news.title}
          className="my-4 w-full h-64 object-cover rounded"
        />
        <p className="text-gray-600 text-sm mb-2">
          {news.details.slice(0, 150)}...
        </p>
        <a href="#" className="text-orange-500 font-semibold">
          Read More
        </a>
      </div>
      <div className="px-6 py-4 flex items-center justify-between border-t">
        <div className="flex items-center text-yellow-500">
          <Rating
            emptySymbol={
              <i className="far fa-star" style={{ color: "#FFD700" }}></i>
            }
            fullSymbol={
              <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
            }
            initialRating={news.rating?.number || 0}
            readonly
          />
          <p className="text-sm font-semibold">{news.rating.number}</p>
        </div>
        <div className="flex items-center text-gray-500">
          <i className="fas fa-eye mr-1"></i>
          <p className="text-sm">{news.total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
