import { createContext, useState } from "react";

const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const [aToken,setAToken] = useState('')

  const 

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
