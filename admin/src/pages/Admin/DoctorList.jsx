import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {

  const {doctors, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(()=>{
    if (aToken) {
      getAllDoctors()
    }
  },[aToken])

  return (
    <div className=''>
      <h1 className=''>Tous les Medecins</h1>
      <div className="">
        {
          doctors.map((item,index)=>(
            <div key={index} className="">
              <img src={item.image} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorList
