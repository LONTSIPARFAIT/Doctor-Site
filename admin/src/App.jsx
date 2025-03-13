import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer,  } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';



const App = () => {
  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#F8F9FD]'> 
      <ToastContainer />
      <Navbar />
      <div className='flex items-center'>
        <Sidebar />
      </div>

    </div>
  ) : (
    <>
    
      <Navbar />
      {/* <Login /> */}
      <ToastContainer />
    </>
  )
}

export default App
