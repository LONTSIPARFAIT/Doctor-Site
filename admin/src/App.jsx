import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer,  } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from 'react-router-dom';




const App = () => {
  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#F8F9FD]'> 
      <ToastContainer />
      <Navbar />
      {/* <div className='flex items-start'>
        <Sidebar />
         <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dasboard' element={<Dashboard />} />
        </Routes>
      </div> */}

    </div>
  ) : (
    <>

    {/* start intrus */}
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Dashboard />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
        </Routes>
      </div>
      {/* end intrus */}

      {/* <Login /> */}
      <ToastContainer />
    </>
  )
}

export default App
