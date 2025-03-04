// import React, { useState } from "react";
// import { assets } from "../assets/assets.js";

// const Login = () => {
//   const [state, setState] = useState("Admin");

//   return (
//     <form className="min-h-[80vh] flex items-center">
//       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">Connexion <span> {state} </span></p>
//         <div>
//           <p>Email</p>
//           <input type="email" className="border border-zinc-300 rounded w-full p-2 mt-1" required/>
//         </div>
//         <div>
//           <p>Password</p>
//           <input type="password" className="border border-zinc-300 rounded w-full p-2 mt-1" required/>
//         </div>
//         <button className="bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer">Connexion</button>
//       </div>
//     </form>
//   );
// };

// export default Login;


// import React from 'react'

import { useState } from "react"

const Login = () => {

  const [state,setState]= useState('Sign Up')

  const [email,setEmail] = useState('')
  const [passsword,setPassword] = useState('')
  const [name,setName] = useState('')

  const onSubmitHandle = async (event) => {
    event.preventDefault()
  }

  return (
    <form action="" className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold"> {state === 'Sign Up' ? "Creer un Compte" : "Se Connecter"} </p>
        <p className="">Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
        {
          state === 'Sign Up' && <div className="w-full">
          <p className="">Nom Complet</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={(e)=>setName(e.target.name)} value={name} />
        </div>
        }
        <div className="w-full">
          <p className="">Email</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="email" onChange={(e)=>setName(e.target.name)} value={email} />
        </div>
        <div className="w-full">
          <p className="">Mot de Passe</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="password" onChange={(e)=>setPassword(e.target.name)} value={passsword} />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer"> {state === 'Sign Up' ? "Creer Un Compte" : "Se Connecter"} </button>
        {
          state === "Sign Up"
          ? <p>Vous avez déjà un compte? <span onClick={()=>setState('Login')} className="text-primary underline cursor-pointer">Vous Connecter Ici</span></p>
          : <p>Creer un nouveau compte? <span onClick={()=>setState('Sign Up')} className="text-primary underline cursor-pointer">Cliquez Ici</span></p>
        }
      </div>
    </form>
  )
}

export default Login