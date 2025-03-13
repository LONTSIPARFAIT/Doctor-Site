import React, { useContext } from 'react'

export default function Sidebar() {

  const {aToken} = useContext()

  return (

    <div>
      {
        aToken
      }
    </div>
  )
}
