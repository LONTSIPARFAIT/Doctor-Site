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
            <div key={index} className="border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group">
              <img className='bg-indigo-50 group-hover:bg-[#5f6FFF] transition-all duration-500' src={item.image} alt="" />
              <div className='p-4'>
                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-sm'>{item.speciality}</p>
              </div>
              <div className="mt-2 flex items-center gap-1 text-sm">
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
