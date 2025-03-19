import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import axios from 'axios'
import { toast } from 'react-toastify'


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
                setDoctors(data.doctors)
            }else{
                toast.error(data)
            }
        } catch (error) {
            console.log(error);
            toast.error(error)
        }
    }

    useEffect(()=>{
        getDoctorData()
    },[])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider