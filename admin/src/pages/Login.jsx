import React, { useState } from 'react'
import { assets } from '../assets/assets.js'

const Login = () => {

    const [state, setState] = useState('Admin')

  return (
    <form className=''>
      <div className="">
        <p className=""><span> {state} </span> Login</p>
      </div>
    </form>
  )
}

export default Login
