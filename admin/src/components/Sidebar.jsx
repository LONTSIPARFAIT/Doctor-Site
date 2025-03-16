import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

export default function Sidebar() {

  const {aToken} = useContext(AdminContext)

  return (

    <div>
      {
        // aToken && <ul>
          <ul>
          <NavLink to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p>Rendez-vous</p>
          </NavLink>          
          <NavLink to={'/all-appointments'}>
            <img src={assets.add_icon} alt="" />
            <p>Ajouter un medecin</p>
          </NavLink>
          
          <NavLink>
            <img src={assets.people_icon} alt="" />
            <p>Liste des medecins</p>
          </NavLink>


        </ul>
      }
    </div>
  )
}
