import React from 'react'
import { Comp_Img } from '../Comp_Img/Comp_Img'
import img from '../../../Images/mueble1.PNG'
import img2 from '../../../Images/mueble2.PNG'
export const Furniture = () => {
  return (
    <div>
        <h1>Muebles disponibles</h1>
        <div>
            <Comp_Img
            url = {img}
            description = "Mueble"
            />
            <p>Bonito juego de sala elaborado en tela tipo lino de facil limpieza, espumas de alta densidad, patas en roble macizo, madera reforestada seca en horno con tratamiento. Incluye: 1 Sofá + 2 poltronas + 1 mesa de centro + 2 cojines</p>
            <p>Cantidad: 23</p>
            <hr />
            <Comp_Img
            url = {img2}
            description = "Mueble2"
            />
            <p>El Sofacama Sion está elaborado en una fuerte estructura de madera pino inmune al gorgojo, relleno con espuma de alta densidad y tapizado con tela poliéster de excelente calidad. Se puede reclinar en 3 posiciones. En modo cama el largo es de 100cm. Cuenta con patas en madera pino, pintadas con laca catalizada para acabado brillante.</p>
            <p>Cantidad: 5</p>
            <Comp_Img
            
            />
        </div>
    </div>
  )
}
