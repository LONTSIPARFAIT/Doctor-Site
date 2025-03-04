import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const Login = () => {
  const [state, setState] = useState("Admin");

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px]">
        <p className="">Connexion <span> {state} </span></p>
        <div>
          <p>Email</p>
          <input type="email" className="" required/>
        </div>
        <div>
          <p>Password</p>
          <input type="password" className="" required/>
        </div>
        <button>Connexion</button>
      </div>
    </form>
  );
};

export default Login;
