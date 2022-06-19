import React from 'react'
import { Comp_Img } from '../Comp_Img/Comp_Img'
import img from '../../../Images/mueble1.PNG'
import img2 from '../../../Images/mueble2.PNG'
export const Furniture = () => {
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
        <h1 className='title_Beds'>Muebles disponibles</h1>
        <div className='furnitures_Container'>
            <Comp_Img
            url = {img}
            description = "Mueble"
            ids="img1"
            ids2="p1"
            evento={pintar}
            evento2={despintar}
            text={"Bonito juego de sala elaborado en tela tipo lino de facil limpieza, espumas de alta densidad, patas en roble macizo, madera reforestada seca en horno con tratamiento. Incluye: 1 Sofá + 2 poltronas + 1 mesa de centro + 2 cojines"}
            text2={"Cantidad disponible: 23"}
            />
            <Comp_Img
            url = {img2}
            description = "Mueble2"
            ids="img2"
            ids2="p2"
            evento={pintar2}
            evento2={despintar2}
            text="El Sofacama Sion está elaborado en una fuerte estructura de madera pino inmune al gorgojo, relleno con espuma de alta densidad y tapizado con tela poliéster de excelente calidad. Se puede reclinar en 3 posiciones. En modo cama el largo es de 100cm. Cuenta con patas en madera pino, pintadas con laca catalizada para acabado brillante."
            text2="Cantidad: 5"
            />
        </div>
    </div>
  )
}
