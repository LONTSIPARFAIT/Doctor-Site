import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality'>
      <h1 className=''>Rechercher par spécialité</h1>
      <p className=''>Parcourez simplement notre vaste liste de médecins de confiance et planifiez votre rendez-vous sans tracas.</p>
      <div className="">
        {specialityData.map(() => {
          <Link>
            
          </Link>
        })
        }
      </div>
    </div>
  )
}

export default SpecialityMenu
