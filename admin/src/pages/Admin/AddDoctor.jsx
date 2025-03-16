import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form>

      <p className=''>Ajouter un Médecin</p>

      <div className="">
        <div className="">
          <label htmlFor="">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" />
        </div>
      </div>
      
    </form>
  )
}

export default AddDoctor
