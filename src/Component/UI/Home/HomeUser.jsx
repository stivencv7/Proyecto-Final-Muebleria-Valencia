import React from 'react'
import { Categories } from '../Categories/Categories'
import { Comp_Img } from '../Comp_Img/Comp_Img'
import img from '../../../Images/cama1.jpg'
import img2 from '../../../Images/mueble1.PNG'
import 'primeicons/primeicons.css';
import { DataViewDemo } from '../Beds/Beds2'


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
        <br /><br /><br /><br /><br />
        <div className='products_Container2'>
            <DataViewDemo/>
        </div>
    </div>
  )
}
