// import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">

        {/* -----------Left section */}
        <div className="">
            <img src={assets.logo} alt="" className="mb-5 w-40 " />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer an took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        {/* -----------center section */}
        <div className="">
            <p className="text-xl font-medium mb-5">ENTREPRISE</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Acceuil</li>
                <li>À propos de nous</li>
                <li>Contactez-nous</li>
                <li>Politique de confidentialité</li>
            </ul>
        </div>

        {/* -----------right section */}
        <div className="">
            <p className="text-xl font-medium mb-5">ENTRER EN CONTACT</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+237 679324517</li>
                <li>lontsiparfait12@gmail.com</li>
            </ul>
        </div>

      </div>

      {/* --------------Copyright text */}
      <div>
        <hr />
        <p className="text-sm text-center py-6 font-medium ">Copyright 2025@ Prescripto - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
