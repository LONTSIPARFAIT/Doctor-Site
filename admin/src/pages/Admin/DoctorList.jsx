import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {

  const {doctors, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(()=>{
    if (aToken) {
      getAllDoctors()
    }
  },[aToken])  

  // useEffect(()=>{
  //   getAllDoctors()
    
  // })

  return (
    <div className='mt-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg'>Tous les Medecins</h1>
      <div className="">
        {
          doctors.map((item,index)=>(
            <div key={index} className="">
              <img src={item.image} alt="" />
              <div className=''>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
              </div>
              <div className="">
                <input type="checkbox" checked={item.available} />
                <p>Available</p>
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default DoctorList
