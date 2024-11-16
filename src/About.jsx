import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex items-center mb-2">
        <img
          src="../src/assets/demo-card-thumbnail.png"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold text-gray-700">system</p>
          <p className="text-xs text-gray-500">8/24/2022</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Joe Biden announces $3 billion in Ukraine weapons aid
      </h2>

      <img
        src="../src/assets/demo-card-thumbnail.png"
        alt="News"
        className="rounded-lg w-full mb-3"
      />

      <p className="text-gray-600 text-sm">
        <span className="font-bold">WASHINGTON:</span> President Joe Biden announced nearly $3 billion in military aid to Kyiv on Wednesday -- the biggest US package so far -- to mark Ukraine's...
      </p>

      <p className="text-orange-600 font-semibold mt-2 cursor-pointer">Read More</p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-yellow-400">
          {[...Array(4)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 17.75l-6.518 3.432 1.247-7.27-5.28-5.151 7.293-1.06L12 1.5l3.258 6.751 7.292 1.06-5.279 5.151 1.247 7.27L12 17.75z" />
            </svg>
          ))}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 17.75l-6.518 3.432 1.247-7.27-5.28-5.151 7.293-1.06L12 1.5l3.258 6.751 7.292 1.06-5.279 5.151 1.247 7.27L12 17.75z" />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
          <p className="ml-2 text-gray-600 font-semibold">4.5</p>
        </div>
        <div className="flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p className="ml-2">988</p>
        </div>
      </div>
    </div>
  );
}

export default About;
