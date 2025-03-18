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
    <div>
      <h1 className=''>Tous les Medecins</h1>
      <div className=""></div>
    </div>
  )
}

export default DoctorList
