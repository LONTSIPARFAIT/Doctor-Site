import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const Login = () => {
  const [state, setState] = useState("Admin");

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">Connexion <span> {state} </span></p>
        <div>
          <p>Email</p>
          <input type="email" className="border border-zinc-300 rounded w-full p-2 mt-1" required/>
        </div>
        <div>
          <p>Password</p>
          <input type="password" className="border border-zinc-300 rounded w-full p-2 mt-1" required/>
        </div>
        <button className="">Connexion</button>
      </div>
    </form>
  );
};

export default Login;
