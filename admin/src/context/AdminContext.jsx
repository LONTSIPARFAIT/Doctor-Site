import { createContext } from "react";

const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const value = {};

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
