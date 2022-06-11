import React from 'react'
import { ServiceProduct_Delete } from '../../../service/ServiceProduct/ServiceProduct_Delete'
// import { Button } from '../../UI/Button/Button'

export const GetProduct = ({ productFound = [], variable = 3 }) => {

    return (
        <div>
            <h1 >Buscado</h1>
            <table className='tr' >
                <thead >
                    <tr >
                        <td>Producto Id</td>
                        <td>Producto nombre</td>
                        <td>Producto descripcion</td>
                        <td>Producto presio</td>
                        <td>Borrar</td>
                        <td>Actualizar</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        productFound.map((item, index) => (

                            <tr key={index}>
                                <td ><input type="number" placeholder={item.codigo_Producto} id="c" value={item.codigo_Producto} /></td>
                                <td><input type="text" placeholder={item.nombre} id="n" /></td>
                                <td><textarea type="text" placeholder={item.descripcion} id="d" /></td>
                                <td><input type="number" placeholder={item.presio} id="p" /></td>
                                <td><ServiceProduct_Delete event={variable} /></td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    )
}