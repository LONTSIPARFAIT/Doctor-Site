import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './context/AppContext';



const App = () => {
  const { aToken } = useContext()

  return aToken ? (
    <div>
      <Login />
      <ToastContainer />
    </div>
  ) : (
    <>
      s
    </>
  )
}

export default App
