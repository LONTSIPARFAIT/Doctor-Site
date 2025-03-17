import { createContext, useState } from "react";

const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');
  const []

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const getAllDoctors = async () => {
    try {
      
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