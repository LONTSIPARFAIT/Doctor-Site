import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

export default function Sidebar() {

  const {aToken} = useContext(AdminContext)

  return (

    <div>
      {
        aToken && 
      }
    </div>
  )
}
