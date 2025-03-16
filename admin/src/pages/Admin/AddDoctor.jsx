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
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div className="">
              <p>Fees</p>
              <input type="number" placeholder='fees' required />
            </div>

          </div>

          <div className="">
            
            <div className="">
              <p>Speciality</p>
              <select name="" id="">
                <option value="General physician">Médecin généraliste</option>
                <option value="Gynecologist">Gynécologue</option>
                <option value="Dermatologist">Dermatologue</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologue</option>
                <option value=" Gastroenterologist">Gastroentérologue</option>
              </select>
            </div>

            <div className="">
              <p>Education</p>
              <input type="text" placeholder='Education' required />
            </div>

            <div className="">
              <p>Address</p>
              <input type="text" placeholder='address 1' required />
              <input type="text" placeholder='address 2' required />
            </div>

          </div>
        </div>

        <div className="">
          <p>About Doctor</p>
          <textarea placeholder='Write about doctor' rows={5} required/>
        </div>

        <button>Add Doctor</button>

      </div>
      
    </form>
  )
}

export default AddDoctor
