import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {

  const {aToken} = useContext(AdminContext)

  return (

    <div>
      {
        aToken && <ul>

          <NavLink></NavLink>


        </ul>
      }
    </div>
  )
}
