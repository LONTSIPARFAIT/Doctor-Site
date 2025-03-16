import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form>

      <p className=''>Ajouter un Médecin</p>

      <div className="">
        <div className="">
          <label htmlFor="doc-img">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id='doc-img' hidden />
          <p>Upload doctor <br /> picture</p>
        </div>

        <div className="">
          <div className="">
            
            <div className="">
              <p>Your Name</p>
              <input type="text" placeholder='Name' required />
            </div>

            <div className="">
              <p>Doctor Email</p>
              <input type="email" placeholder='perfect@gmail.com' required />
            </div>

            <div className="">
              <p>Doctor Password</p>
              <input type="password" placeholder='Password' required />
            </div>

            <div className="">
              <p>Experience</p>
              <select name="" id="">
                <option value="1 Year">1 Year</option>
              </select>
            </div>

          </div>
        </div>

      </div>
      
    </form>
  )
}

export default AddDoctor
