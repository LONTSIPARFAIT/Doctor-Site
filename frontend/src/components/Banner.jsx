// import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate();
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

      {/* -----------------Left side  */}
      <div className='flex-1 py-8 sm:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
            <p className='mt-4'>Book Appoitments</p>
            <p className=''>With 100+ trusted Doctors</p>
        </div>
        <button onClick={()=>{navigate("/login"); scrollTo(0,0)}} className='bg-white text-sm sm:base text-gray-600 px-8 py-3 rounded-full cursor-pointer mt-6 hover:scale-105 transition-all'>Creer un compte</button>
      </div>
      {/* -----------------Right side  */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img src={assets.appointment_img} alt="" className="w-full absolute bottom-0 right-0 max-w-md" />
      </div>

    </div>
  )
}

export default Banner
