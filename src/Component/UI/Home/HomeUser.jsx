import React from 'react'
import { Categories } from '../Categories/Categories'
import carrito from '../../../Images/carrito.jpg'

export const HomeUser = () => {
  return (
    <div>
        <div>
            <br />
            <h1>Bienvenido</h1>
            <img src={carrito} alt="Carrito de compras" className='shopping_Cart'/>
        </div>
        <Categories/>
    </div>
  )
}
