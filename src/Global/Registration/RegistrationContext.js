import React, { createContext, useContext, useState } from "react"
import { registrationData } from "./registrationData"

const RegistrationContext = createContext(registrationData)

export default function RegistrationContextProvider({ children }){

    const [ signUpData, setSignUpData ] = useState({ registrationData })

    return (
        <RegistrationContext.Provider value={{ signUpData, setSignUpData }} >
            { children }
        </RegistrationContext.Provider>
    )
}

export const useRegistrationContext = () => useContext(RegistrationContext)