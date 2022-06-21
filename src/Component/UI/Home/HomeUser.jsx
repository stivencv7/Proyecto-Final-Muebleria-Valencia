import React from 'react'
import { Categories } from '../Categories/Categories'
import { Comp_Img } from '../Comp_Img/Comp_Img'
import img from '../../../Images/cama1.jpg'
import img2 from '../../../Images/mueble1.PNG'
import 'primeicons/primeicons.css';

export const HomeUser = () => {
  function pintar(){
    document.getElementById("img1").classList.remove("despintar")
    document.getElementById("p1").classList.remove("despintar")
    document.getElementById("img1").classList.add("pintar")
    document.getElementById("p1").classList.add("pintar")
    document.getElementById("p3").classList.remove("despintar")
    document.getElementById("p3").classList.add("pintar")  
  }

  function despintar(){
    document.getElementById("p1").classList.remove("pintar")
    document.getElementById("img1").classList.remove("pintar")
    document.getElementById("img1").classList.add("despintar")
    document.getElementById("p1").classList.add("despintar")
    document.getElementById("p3").classList.add("despintar")
    document.getElementById("p3").classList.remove("pintar")
  }

  function pintar2(){
    document.getElementById("img2").classList.remove("despintar")
    document.getElementById("p2").classList.remove("despintar")
    document.getElementById("img2").classList.add("pintar")
    document.getElementById("p2").classList.add("pintar")
    document.getElementById("p4").classList.add("pintar")
    document.getElementById("p4").classList.remove("despintar")
    }

  function despintar2(){
    document.getElementById("p2").classList.remove("pintar")
    document.getElementById("img2").classList.remove("pintar")
    document.getElementById("p2").classList.add("despintar")
    document.getElementById("img2").classList.add("despintar")
    document.getElementById("p4").classList.remove("pintar")
    document.getElementById("p4").classList.add("despintar")
  }

  return (
    <div>
        <div className='div_Title'>
            <br />
            <h1>Bienvenido</h1>
            <i className="pi pi-shopping-cart" style={{'fontSize': '2em'}}></i>
        </div>
        <Categories/>
        <br /><br /><br />
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
            ids3="p3"
            textButton={"Agregar al carrito"}
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
            ids3="p4"
            textButton={"Agregar al carrito"}
            />
        </div>
    </div>
  )
}
