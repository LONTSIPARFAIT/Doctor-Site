import { createContext } from "react";
import { doctors } from "../assets/assets";
import axios from 'axios'


export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const currencySymbol = "$"
    const backendUrl = import

    const value = {
        doctors,
        currencySymbol,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider