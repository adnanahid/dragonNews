import React from "react";
import { FaGithub } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <section className="p-2">
        <h2 className="p-3 text-xl font-bold text-gray-800">Login With</h2>
        <button className=" flex btn w-full text-xl mb-3 gap-2">
          <FaGoogle />
          <p>Login with Google</p>
        </button>
        <button className=" flex btn w-full text-xl mb-3 gap-2">
          <FaGithub />
          <p>Login with Github</p>
        </button>
      </section>


    </div>
  );
};

export default SocialLogin;
