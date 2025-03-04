import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const Login = () => {
  const [state, setState] = useState("Admin");

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col p-6">
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
