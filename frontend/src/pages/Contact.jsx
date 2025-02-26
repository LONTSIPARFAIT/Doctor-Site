// import React from 'react'

import { assets } from "../assets/assets"

const Contact = () => {
  return (
    <div>
      
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACTEZ <span className="text-gray-700 font-semibold">NOUS</span></p>
      </div>

      <div className="my-20 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">

        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">NOTRE BUREAU</p>
          <p className="text-gray-500">00000 Willms Station <br /> Suite 000, Washington, USA</p>
          <p className="text-gray-500">Tel: (+237) 679324517 <br /> Email: lontsiparfait12@gmail.com</p>
          <p className="font-semibold text-lg text-gray-600">CARRIÈRES CHEZ PRESCRIPTO</p>
          <p className="text-gray-500">En savoir plus sur nos équipes et nos offres d&apos;emploi.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Découvrir les emplois</button>
        </div>

      </div>
      
    </div>
  )
}

export default Contact
