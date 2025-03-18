import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {

  const {doctors, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(()=>{

  },[aToken])

  return (
    <div>
      DoctorList
    </div>
  )
}

export default DoctorList
