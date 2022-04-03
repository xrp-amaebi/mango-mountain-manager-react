import React, { useEffect } from "react"
import emoji from "node-emoji"

import ToastContextProvider from "../../Global/Toast/ToastContext"
import { useModalContext } from "../../Global/Modal/ModalContext"

// import SuccessIcon from "../../assets/icons/success.svg"
// import ErrorIcon from "../../assets/icons/error.svg"
// import CancelIcon from "../../assets/icons/cancelIcon.svg"

import { Paragraph, GlassToast } from "./style"


const Rules = ({ icon, description, bg }) => {

  const { showModal, setShowModal } = useModalContext()

  useEffect(() => {
    if (showModal === true){
      setTimeout(() => {
        setShowModal(false)
      }, 3700)
    }
  }, [showModal, setShowModal])

  return (
    <ToastContextProvider>
      <GlassToast showModal={showModal} bg={bg}>
        <div>
          {
            `${
                icon === "success" ? 
                  (emoji.emojify(':pushpin:'))
                : 
                  icon === "error" ? 
                    (emoji.emojify(':no_entry:'))
                  :
                    null
              }
            `
          }
        </div>
        <div><Paragraph>{description}</Paragraph></div>
        {/* <div  className="cancel" onClick={() => setShowModal(false)}>
          {emoji.emojify(':x:')}
        </div> */}
      </GlassToast>
    </ToastContextProvider>
  )
}

export default Rules
