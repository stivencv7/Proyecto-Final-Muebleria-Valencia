import React from 'react'
import img from '../../../Images/cama1.jpg'
import { Comp_Img } from '../Comp_Img/Comp_Img'
import img2 from '../../../Images/mueble1.PNG'


export const ShoppingCart = () => {
    function pintar(){
        document.getElementById("img1").classList.remove("despintar")
        document.getElementById("p1").classList.remove("despintar")
        document.getElementById("img1").classList.add("pintar")
        document.getElementById("p1").classList.add("pintar")
    }
    
    function pintar2(){
        document.getElementById("img2").classList.remove("despintar")
        document.getElementById("p2").classList.remove("despintar")
        document.getElementById("img2").classList.add("pintar")
        document.getElementById("p2").classList.add("pintar")
    }
    
    return (
    <div>
        <h1 className='titleShoppingCart'>Estos son los productos que tienes en tu carrito de compras</h1>
        <div className='products_Container'>
            <Comp_Img className="tarjeta" 
            url={img}
            evento={pintar}
            description="cama" 
            ids="img1"
            ids2="p1"
            text={"Combo elaborado en tela gris de buena calidad. Diseño moderno y simple ideal para todo tipo de ambientes. 140x190"}
            text2={"Cantidad disponible: 10"}
            />
            <Comp_Img
            url = {img2}
            evento={pintar2}
            description = "Mueble"
            ids="img2"
            ids2="p2"
            text={"Bonito juego de sala elaborado en tela tipo lino de facil limpieza, espumas de alta densidad, patas en roble macizo, madera reforestada seca en horno con tratamiento. Incluye: 1 Sofá + 2 poltronas + 1 mesa de centro + 2 cojines"}
            text2={"Cantidad disponible: 23"}
            />
        </div>
    </div>
  )
}
