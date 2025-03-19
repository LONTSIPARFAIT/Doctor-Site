import { createContext, useState } from "react";
import { doctors } from "../assets/assets";
import axios from 'axios'


export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const currencySymbol = "$"
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors,setDoctors] = useState([])

    const value = {
        doctors,
        currencySymbol,
    }

    const getDoctorData = async () => {
        try { 
            const {data} = await axios.get(backendUrl + '/api/doctor/list')

            if (data.success) {
                setDoctors
            }
        } catch (error) {
            
        }
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider