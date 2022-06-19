import React from 'react'
// import { ServiceProduct_Delete } from '../../../service/ServiceProduct/ServiceProduct_Delete'
// import { Button } from '../../UI/Button/Button'

export const GetProduct = ({ productFound = [] }) => {

    return (
        <div>
            <h1 >Producto Buscado</h1>
            <table className='table table-sm'>
                <thead className='table_Head'>
                    <tr >
                        <th className='input-group-text-table'>Producto Id</th>
                        <th className='input-group-text-table'>Producto nombre</th>
                        <th className='input-group-text-table'>Producto descripcion</th>
                        <th className='input-group-text-table'>Producto precio</th>
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
                                <td className='form-control-products'><textarea type="text" placeholder={item.descripcion} id="d" className='input_Products'/></td>
                                <td className='form-control-products'><input type="number" placeholder={item.presio} id="p" className='input_Products'/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}