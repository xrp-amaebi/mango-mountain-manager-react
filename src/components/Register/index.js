import React from 'react'
import { RegisterInputContainer } from './style'

export default function RegisterInput({ placeholder, name, icon, type, onChangeHandler, loginChange }) {
    return (
        <RegisterInputContainer>
            {/* <img src={icon} alt= "formIcon" /> */}
            <input 
                required
                name={name}
                onChange={onChangeHandler || loginChange}
                type={type}
                placeholder={placeholder}
            />
        </RegisterInputContainer>
    )
}