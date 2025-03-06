import { createContext, useState } from "react";

const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const [aToken,setAToken] = useState()

  const value = {};

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
