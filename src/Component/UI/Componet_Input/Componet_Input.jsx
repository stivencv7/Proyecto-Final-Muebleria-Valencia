import React from 'react'

export const Componet_Input = ({ type, action, value, placeholder, name, id }) => {
    return (
        <input type={type} onChange={action} value={value} placeholder={placeholder} name={name} id={id} />
    )
}
