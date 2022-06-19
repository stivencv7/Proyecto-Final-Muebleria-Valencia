import React from 'react'
import { Categories } from '../Categories/Categories'
import carrito from '../../../Images/carrito.jpg'
import { Comp_Img } from '../Comp_Img/Comp_Img'
import img from '../../../Images/cama1.jpg'
import img2 from '../../../Images/mueble1.PNG'

export const HomeUser = () => {
  function pintar(){
    document.getElementById("img1").classList.remove("despintar")
    document.getElementById("p1").classList.remove("despintar")
    document.getElementById("img1").classList.add("pintar")
    document.getElementById("p1").classList.add("pintar")
    }

  function despintar(){
    document.getElementById("p1").classList.remove("pintar")
    document.getElementById("img1").classList.remove("pintar")
    document.getElementById("img1").classList.add("despintar")
    document.getElementById("p1").classList.add("despintar")
  }

  function pintar2(){
    document.getElementById("img2").classList.remove("despintar")
    document.getElementById("p2").classList.remove("despintar")
    document.getElementById("img2").classList.add("pintar")
    document.getElementById("p2").classList.add("pintar")
    }

  function despintar2(){
    document.getElementById("p2").classList.remove("pintar")
    document.getElementById("img2").classList.remove("pintar")
    document.getElementById("p2").classList.add("despintar")
    document.getElementById("img2").classList.add("despintar")
  }

  return (
    <div>
        <div className='div_Title'>
            <br />
            <h1>Bienvenido</h1>
            <img src={carrito} alt="Carrito de compras" className='shopping_Cart'/>
        </div>
        <Categories/>
        <div className='products_Container2'>
            <Comp_Img className="tarjeta" 
            url={img}
            evento={pintar}
            evento2={despintar} 
            description="cama" 
            ids="img1"
            ids2="p1"
            text={"Combo elaborado en tela gris de buena calidad. Diseño moderno y simple ideal para todo tipo de ambientes. 140x190"}
            text2={"Cantidad disponible: 10"}
            />
            <Comp_Img
            url = {img2}
            evento={pintar2}
            evento2={despintar2}
            description = "Mueble"
            ids="img2"
            ids2="p2"
            text="Mueble para sala de color gris "
            text2="Cantidad disponible: 15"
            />
        </div>
    </div>
  )
}
