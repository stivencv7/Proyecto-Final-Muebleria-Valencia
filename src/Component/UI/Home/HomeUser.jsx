import React from 'react'
import { Categories } from '../Categories/Categories'
import { Comp_Img } from '../Comp_Img/Comp_Img'
import img from '../../../Images/cama1.jpg'
import img2 from '../../../Images/mueble1.PNG'
import 'primeicons/primeicons.css';
import { DataViewDemo } from '../Beds/Beds2'
import { Footer } from '../Footer/Footer'
import { SubHeader } from '../../Layout/SubHeader/SubHeader'


export const HomeUser = () => {

  return (
    <div>
        <div className='div_Title'>
            <br />
            <h1>Bienvenido</h1>
            <i className="pi pi-shopping-cart" style={{'fontSize': '2em'}}></i>
        </div>
        <SubHeader/>
        <br /><br /><br /><br /><br />
        <div className='products_Container2'>
            <DataViewDemo/>
        </div>
        <br /><br />
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}
