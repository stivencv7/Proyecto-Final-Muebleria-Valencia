import React from 'react'
import { Link } from 'react-router-dom'

export const Navigator = () => {
  return (
    <nav className='Nav'>
        <Link to="/" className='link'><span>Home</span></Link>
    </nav>
  )
}
