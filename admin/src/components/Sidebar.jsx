import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

export default function Sidebar() {

  const {aToken} = useContext(AdminContext)

  return (

    <div>
      {
        aToken && <ul>

          <NavLink>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink>
            <img src={assets.appointment_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>
          
          <NavLink>
            <img src={assets.a} alt="" />
            <p>Dashboard</p>
          </NavLink>
          
          <NavLink>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>


        </ul>
      }
    </div>
  )
}
