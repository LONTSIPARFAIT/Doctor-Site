import React, { useContext } from 'react'
import AddDoctor from './AddDoctor'

const DoctorList = () => {

  const {doctors, aToken, getAllDoctors } = useContext(AddDoc)

  return (
    <div>
      DoctorList
    </div>
  )
}

export default DoctorList
