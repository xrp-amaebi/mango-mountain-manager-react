import React, { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export default function ModalContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext)