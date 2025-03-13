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
            <img src={assets} alt="" />
          </NavLink>


        </ul>
      }
    </div>
  )
}
