import React from "react";

const FindUs = () => {
  return (
    <section className="p-2">
      <h2 className="text-xl font-bold text-center my-3">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item text-xl font-bold">
          <img src="../src/assets/fb.png" alt="" />
          <p>Facebook</p>
        </button>
        <button className="btn join-item text-xl font-bold">
          <img src="../src/assets/twitter.png" alt="" />
          <p>Twitter</p>
        </button>
        <button className="btn join-item text-xl font-bold">
          <img src="../src/assets/instagram.png" alt="" />
          <p>Instagram</p>
        </button>
      </div>
    </section>
  );
};

export default FindUs;
