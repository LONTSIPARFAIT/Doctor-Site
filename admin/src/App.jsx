import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const {atoken} = useContext(AppCont)
  return (
    <div>
      <Login />
      <ToastContainer />
    </div>
  )
}

export default App
