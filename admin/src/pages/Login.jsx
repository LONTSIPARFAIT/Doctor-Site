import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const Login = () => {
  const [state, setState] = useState("Admin");

  return (
    <form className="">
      <div className="">
        <p className="">Connexion <span> {state} </span></p>
        <div>
          <p>Email</p>
          <input type="email" required/>
        </div>
        <div>
          <p>Password</p>
          <input type="password" required/>
        </div>
        <button>Connexion</button>
      </div>
    </form>
  );
};

export default Login;
