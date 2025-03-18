import { createContext, useState } from "react";
import  axios from 'axios'
import { toast } from "react-toastify";

const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');
  const [doctors,setDoctors] = useState([])

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const getAllDoctors = async () => {
    try {
      const {data} = await axios.post(backendUrl + '/api/admin/all-doctors', {}, {headers:{aToken}})
      if (data.success) {
        setDoctors(data.doctors)
        console.log(data.doctors);
        
      }else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const changeAvailablity = async (docId) =>{
    try {
      const {data} = await axios.post(backendUrl + '/api/admin/change-availability', {}, {headers:{aToken}})
    } catch (error) {
      toast.error(error.message)
    }
  }

  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export { AdminContext };
export default AdminContextProvider ;