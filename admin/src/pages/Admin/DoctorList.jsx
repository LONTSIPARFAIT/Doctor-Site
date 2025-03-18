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
      <h1 className='text-lg font-medium'>Tous les Medecins</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {
          doctors.map((item,index)=>(
            <div key={index} className="border-indigo-200 rounded-xl max-w-56 overflow-hidden">
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
