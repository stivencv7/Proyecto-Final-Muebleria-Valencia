import React from 'react'

export const Com_Button = ({ action, text }) => {
  return (
    <button onClick={action}>{text}</button>
  )
}
