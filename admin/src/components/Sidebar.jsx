import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

export default function Sidebar() {

  const {aToken} = useContext(AdminContext)

  return (

    <div className='min-h-screen bg-white border-r'>
      {
        // aToken && <ul className='text[#515151] mt-5'>
          <ul className='text[#515151] mt-5'>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[5f6FFF]' : ''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p>Rendez-vous</p>
          </NavLink>          
          <NavLink to={'/add-doctor'}>
            <img src={assets.add_icon} alt="" />
            <p>Ajouter un medecin</p>
          </NavLink>
          
          <NavLink to={'/doctor-list'}>
            <img src={assets.people_icon} alt="" />
            <p>Liste des medecins</p>
          </NavLink>


        </ul>
      }
    </div>
  )
}
