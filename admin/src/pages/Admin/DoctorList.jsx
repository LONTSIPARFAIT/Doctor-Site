import React, { useContext } from 'react'

const DoctorList = () => {

  const {doctors, aToken, getAllDoctors } = useContext(AddDoc)

  return (
    <div>
      DoctorList
    </div>
  )
}

export default DoctorList
