import React from 'react'
import { FieldName } from './style'

export default function FieldInput({ placeholder, name, icon, type, onChangeHandler, loginChange }) {
    return (
        <FieldName>
            <input
                required
                name={name}
                onChange={onChangeHandler || loginChange}
                type={type}
                placeholder={placeholder}
            />
        </FieldName>
    )
}