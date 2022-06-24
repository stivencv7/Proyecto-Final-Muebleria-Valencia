import React from 'react'
import { Comp_Img } from '../Comp_Img/Comp_Img'
import img from '../../../Images/mueble1.PNG'
import img2 from '../../../Images/mueble2.PNG'
import { DataViewFurniture } from './Furniture2'

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
        <div >
          <DataViewFurniture/>
        </div>
    </div>
  )
}
