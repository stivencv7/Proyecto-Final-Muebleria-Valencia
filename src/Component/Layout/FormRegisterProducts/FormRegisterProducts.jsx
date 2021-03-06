import React from 'react';
//import { Logo } from '../../UI/Logo/Logo'
//import { Link } from 'react-router-dom'
import icons from '../../../Images/iconosMuebles.jpg'
import "./FormRegisterProducts.css"

export const FormRegisterProducts = ({ onChange1, onChange2, onChange3, onChange4, onClick }) => {
    return (
        <div>
            <h1 className='titleProducts'>Registrar Producto</h1>
            <div id='informacion' className='form_Products'>
              
                <form>
                    <input type="hidden" id="idprodut" onChange={onChange1} /> 
                    <label className='input-group-text'>nombre</label>
                    <input type="text" id='name_product' name='search'className='form-control2' onChange={onChange2} />
                    <br /><br />
                    <label className='input-group-text'>Descripcion</label>
                    <textarea id='text' placeholder='descripcion' className='form-control2' onChange={onChange3} ></textarea>
                    <br />
                    <label className='input-group-text'>Precio</label>
                    <input type="number" id='press' className='form-control2' onChange={onChange4} />
                    <br /><br />
                    <div>
                         <input type="button" value="Registrar Producto" className='btnRegisterProduct' onClick={onClick} /> 
                    </div>
                </form>
                <img src={icons} alt="" className='iconsProducts'/>
                
                <br />
            </div>
            <div className='clear'></div>
            <hr />
        </div>
    )
}
