import { createContext } from "react";

const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
  const value = {};

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContext;