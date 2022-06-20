import React from 'react'
import { Comp_Input } from '../../UI/Comp_Input/Comp_Input'

export const UsersList = ({ productFound = [] }) => {
  return (
    <div>
        <div>
            <br />
            <Comp_Input id='input_buscar' type="number"/>
            <button className='btnSearchProduct'>Buscar</button>
            <h1 >Usuario Buscado</h1>
            <table className='table table-sm'>
                <thead className='table_Head'>
                    <tr >
                        <th className='input-group-text-table'>Cedula usuario</th>
                        <th className='input-group-text-table'>Nombre usuario</th>
                        <th className='input-group-text-table'>Apellido usuario</th>
                        <th className='input-group-text-table'>Correo usuario</th>
                        <th className='input-group-text-table'>Fecha de nacimiento usuario</th>
                        <th className='input-group-text-table'>Numero de celular usuario</th>
                        <th className='input-group-text-table'>Correo usuario</th>
                        <th className='input-group-text-table'>Borrar</th>
                        <th className='input-group-text-table'>Actualizar</th>
                    </tr>
                </thead>
                <tbody className='table_Body'>
                    {
                        productFound.map((item, index) => (

                            <tr key={index}>
                                <td className='form-control-products'><input type="number" placeholder={item.codigo_Producto} id="c" value={item.codigo_Producto} className='input_Products'/></td>
                                <td className='form-control-products'><input type="text" placeholder={item.nombre} id="n" className='input_Products'/></td>
                                <td className='form-control-products'><input type="text" placeholder={item.descripcion} id="d" className='input_Products'/></td>
                                <td className='form-control-products'><input type="number" placeholder={item.presio} id="p" className='input_Products'/></td>
                                <td className='form-control-products'><input type="number" placeholder={item.presio} id="p" className='input_Products'/></td>
                                <td className='form-control-products'><input type="number" placeholder={item.presio} id="p" className='input_Products'/></td>
                                <td className='form-control-products'><input type="number" placeholder={item.presio} id="p" className='input_Products'/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
