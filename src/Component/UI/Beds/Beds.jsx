import React from 'react'
import { Comp_Img } from '../Comp_Img/Comp_Img'
import img from '../../../Images/cama1.jpg'
import img2 from '../../../Images/cama2.PNG'
import img3 from '../../../Images/cama3.jpg'





export const Beds = () => {

  function pintar(){
    document.getElementById("img1").classList.remove("despintar")
    document.getElementById("p1").classList.remove("despintar")
    document.getElementById("img1").classList.add("pintar")
    document.getElementById("p1").classList.add("pintar")
    document.getElementById("p4").classList.add("pintar")
    document.getElementById("p4").classList.remove("despintar")  
  }

  function despintar(){
    document.getElementById("p1").classList.remove("pintar")
    document.getElementById("img1").classList.remove("pintar")
    document.getElementById("img1").classList.add("despintar")
    document.getElementById("p1").classList.add("despintar")
    document.getElementById("p4").classList.remove("pintar")
    document.getElementById("p4").classList.add("despintar")
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

  function pintar3(){
    document.getElementById("p3").classList.remove("despintar")
    document.getElementById("img3").classList.remove("despintar")
    document.getElementById("p3").classList.add("pintar")
    document.getElementById("img3").classList.add("pintar")
    }

  function despintar3(){
    document.getElementById("p3").classList.remove("pintar")
    document.getElementById("img3").classList.remove("pintar")
    document.getElementById("p3").classList.add("despintar")
    document.getElementById("img3").classList.add("despintar")
  }

  return (
    <div>
        <h1 className='title_Beds'>CAMAS DISPONIBLES</h1>
        <br />
        <div className='products_Container'>
            <Comp_Img className="tarjeta" 
            url={img}
            evento={pintar}
            evento2={despintar}
            description="cama" 
            ids="img1"
            ids2="p1"
            text={"Combo elaborado en tela gris de buena calidad. Diseño moderno y simple ideal para todo tipo de ambientes. 140x190"}
            text2={"Cantidad disponible: 10"}
            ids3="p4"
            textButton={"Agregar al carrito"}
            />
            <br/>
            <Comp_Img className="tarjeta"
            url={img2}
            evento={pintar2}
            evento2={despintar2}
            ids="img2"
            ids2="p2"
            description="cama2"
            text={"Cama Doble Liviana Duna Hogar Venecia"}
            text2={"Cantidad disponible: 7"}
            />
            <br/>
            <Comp_Img className="tarjeta"
            url={img3}
            evento={pintar3}
            evento2={despintar3}
            description="cama3"
            ids="img3"
            ids2="p3"
            text={"Base Cama: 190 cm largo x 140 cm ancho x 35 cm alto."+
            "Cabecero: 160 cm alto x 140 cm ancho x 8 cm largo."}
            text2={"Cantidad disponible: 16"}
            />
        </div>
    </div>
  )
}
