import { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="logo" />
      <ul className='hidden md:flex item-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>ACCEUIL</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors' >
          <li className='py-1'>TOUS LES DOCTEURS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about' >
          <li className='py-1'>A PROPOS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact' >
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex item-center gap-4'>
        {
          token
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="photo profile" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
          :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Creer un compte</button>
        } 
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" /> 
              {/*------------------ Mobile Menu  */}
        <div className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className='' src={assets.logo} alt="" />
            <img c onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul>
            <NavLink>ACCEUIL</NavLink>
            <NavLink>TOUS LES DOCTEURS</NavLink>
            <NavLink>A PROPOS</NavLink>
            <NavLink>CONTACT</NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
