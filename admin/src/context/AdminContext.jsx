import { createContext, useState } from "react";

const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const [aToken,setAToken] = useState('')

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const value = {
    aToken,setAToken
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
