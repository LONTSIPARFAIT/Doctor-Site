import React, { useContext, useState } from "react";
import AdminContext from "../context/AdminContext";
// import { assets } from "../assets/assets.js";

const Login = () => {
  const [state, setState] = useState("Admin");

  const {setToken} = useContext(AdminContext)
  
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState();

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">Connexion <span className="text-primary"> {state} </span></p>
        <div className="w-full">
          <p>Email</p>
          <input type="email" className="border border-[#DADADA] rounded w-full p-2 mt-1" required/>
        </div>
        <div className="w-full">
          <p>Password</p>
          <input type="password" className="border border-[#DADADA] rounded w-full p-2 mt-1" required/>
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer">Connexion</button>
        {
          state === "Admin"
          ? <p>Connexion de Medecin? <span className="text-primary hover:underline cursor-pointer" onClick={()=>setState('Doctor')}>Cliquez Ici</span></p>
          : <p>Connexion Admin? <span className="text-primary hover:underline cursor-pointer" onClick={()=>setState('Admin')}>Cliquez Ici</span></p>
        } 
      </div>
    </form>
  );
};


export default Login