import React, { useContext, createContext, useState } from "react"

const ToastContext = createContext()

export default function ToastContextProvider({ children }){
  
  const [showToast, setShowToast] = useState(false)

  return (
    <ToastContext.Provider value={{ showToast, setShowToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export const useToastContext = () => useContext(ToastContext)