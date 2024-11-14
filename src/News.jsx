import React from "react";
import Left from "./Left";
import Right from "./Right";
import { Outlet } from "react-router-dom";

const News = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <section className="col-span-3">
        <Left></Left>
      </section>
      <section className="col-span-6">
        <Outlet></Outlet>
      </section>
      <section className="col-span-3">
        <Right></Right>
      </section>
    </div>
  );
};

export default News;
