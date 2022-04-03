import React from 'react'
import ToastContextProvider from './Toast/ToastContext'
import ModalContextProvider from './Modal/ModalContext'
import RegistrationContextProvider from './Registration/RegistrationContext'
import TokenContextProvider from './Token/TokenContext'
import EventContextProvider from './Event'
import UserContextProvider from './User'

function Store({ children }){
    return (
        <TokenContextProvider>
        <UserContextProvider>
        <EventContextProvider>  
        <ToastContextProvider>        
        <ModalContextProvider>
        <RegistrationContextProvider>
            {children}
        </RegistrationContextProvider>
        </ModalContextProvider>
        </ToastContextProvider>
        </EventContextProvider>
        </UserContextProvider>
        </TokenContextProvider>

    )
}

export default Store