import { createContext, useState } from "react";
import  axios from 'axios'

const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');
  const [doctors,setDoctors] = useState([])

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const getAllDoctors = async () => {
    try {
      const {data} = await axios.post(backendUrl + '/api/admin/all-')
    } catch (error) {
      
    }
  }

  const value = {
    aToken,
    setAToken,
    backendUrl,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export { AdminContext };
export default AdminContextProvider ;