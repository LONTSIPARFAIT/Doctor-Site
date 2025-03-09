import React, { useCallback, useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext';

const Navbar = () => {
  const  {aTken} = useContext(AdminContext);
  return (
    <div >
      <div>
        <img src={assets.admin_logo} alt='' />
        <p> { } </p>
      </div>
    </div>
  )
}

export default Navbar
