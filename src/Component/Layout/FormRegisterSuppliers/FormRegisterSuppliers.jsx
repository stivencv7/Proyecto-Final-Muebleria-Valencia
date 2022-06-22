import React from 'react'
import gifSupplier from '../../../Images/proveedor.gif'

export const FormRegisterSuppliers = ({onChange1 , onChange2 , onChange3 , onClick}) => {
  return (
    <div>
      <form className='form'>
        <h1>Registrar Proveedor</h1>
        <label id='name_supplier2' className='input-group-text'>Nombre Completo</label>
        <input type="text" id='name_supplier' className='form-control2' onChange={onChange1} />
        <br /><br />
        <label id='cellphonenumber_supplier2' className='input-group-text'>Telefono</label>
        <input type="text" id='cellphonenumber_supplier' className='form-control2' onChange={onChange2} />
        <br /><br />
        <label id='id_supplier' className='input-group-text'>Cedula</label>
        <input type="text" id='id_supplier' className='form-control2' onChange={onChange3}/>
        <br />
        <img src={gifSupplier} alt="" className='supplierGif'/>
        <div>
            <input type="button" value="Registrar Proveedor" id='btnRegister' className='btnRegisterSupplier' onClick={onClick} />     
        </div>
        <br /><br />
      </form>
    </div>
  )
}
