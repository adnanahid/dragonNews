import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Middle = () => {
  const data = useLoaderData();
  const [allNews, setAllNews] = useState(data);
  const { id } = useParams();
  const filterData = data.filter((item) => item.category_id === id);
  useEffect(() => {
    if (id) {
      setAllNews(filterData);
    } else {
      setAllNews(data);
    }
  }, [id, data]);
  return (
    <div>
      <h2 className="text-xl font-bold">Dragon News Home</h2>
      <div>
        {allNews.map((newsData) => (
          <NewsCard news={newsData} />
        ))}
      </div>
    </div>
  );
};

export default Middle;
