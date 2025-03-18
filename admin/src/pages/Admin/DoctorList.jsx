import React, { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {

  const {doctors, aToken, getAllDoctors } = useContext(AdminContext)

  return (
    <div>
      DoctorList
    </div>
  )
}

export default DoctorList
