import React from 'react'
import { Comp_Img } from '../Comp_Img/Comp_Img'
import img from '../../../Images/cama1.jpg'
import img2 from '../../../Images/cama2.PNG'
import img3 from '../../../Images/cama3.jpg'

export const Beds = () => {
  return (
    <div>
        <h1>Camas disponibles</h1>
        <br />
        <div className='products_Container'>
            <Comp_Img
            url={img}
            description="cama"
            />
            <p>Combo elaborado en tela gris de buena calidad. Diseño moderno y simple ideal para todo tipo de ambientes. 140x190</p>
            <p>Cantidad disponible: 10</p>
            <Comp_Img
            url={img2}
            description="cama2"
            />
            <p>CAMA DOBLE LIBIA DUNA Hogar Venecia La cama Libia brinda una sensación incomparable de sofisticación y estilo. Cabecero fabricado en madera aglomerado MDP 15 mm con reengruese en madera MDF de 18 mm, estructura en aglomerado MDP con reengruese en MDF, acabados en canto flexible, tendido en madera pino natural y 2 patas en madera pino inmune al gorgojo.</p>
            <p>Cantidad disponible: 7</p>
            <Comp_Img
            url={img3}
            description="cama3"
            />
            <p>Base Cama: 190 cm largo x 140 cm ancho x 35 cm alto. Cabecero: 160 cm alto x 140 cm ancho x 8 cm largo.</p>
            <p>Cantidad disponible: 16</p>
        </div>
    </div>
  )
}
