import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';



const App = () => {
  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#F8F9FD]'> 
      <ToastContainer />
      .

    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
