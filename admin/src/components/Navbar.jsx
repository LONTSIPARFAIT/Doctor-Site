import React, {  useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext';

const Navbar = () => {
  const  {aToken} = useContext(AdminContext);
  return (
    <div className='flex justify-between items-center px-4 sm:px- py-' >
      <div>
        <img src={assets.admin_logo} alt='' />
        <p> { aToken ? 'Admin' : 'Doctor' } </p>
      </div>
      <button>Logout</button>
    </div>
  )
}

export default Navbar
