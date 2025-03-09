import React, {  useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext';

const Navbar = () => {
  const  {aToken} = useContext(AdminContext);
  return (
    <div >
      <div>
        <img src={assets.admin_logo} alt='' />
        <p> { aToken } </p>
      </div>
    </div>
  )
}

export default Navbar
