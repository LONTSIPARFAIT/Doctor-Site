// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"

const RelatedDoctors = () => {
    const {doctors} = useContext(AppContext)

    const [relDoc, setRelDocs] = useState([])

    useEffect(() =>{
        if (doctors.lenght > 0 && speciality) {
            const doctorsData = doctors.filter((doc)=> doc.speciality)
        }
    },[doctors,speciality,docId])

  return (
    <div>
      
    </div>
  )
}

export default RelatedDoctors
