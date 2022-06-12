import React from 'react'
import { Link } from 'react-router-dom'

export const Navigator = () => {
  return (
    <nav className='Nav'>
        <Link to="/" className='link'><span>Home</span></Link>
        <br/>
        <Link to="/productsInterface"><span>Productos</span></Link>
        <br />
        <Link to="/login"><span>Iniciar sesion</span></Link>
        <br />
        <Link to='/registerUser'><span>Registrarse</span></Link>
    </nav>
  )
}
