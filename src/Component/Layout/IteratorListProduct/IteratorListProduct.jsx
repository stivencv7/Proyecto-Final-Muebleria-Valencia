import React from 'react'

export const IteratorListProduct = ({ productos = [] }) => {
  
    return (
        <div>
        <h1 className="text-center">Lista de Productos</h1>
        <table className='table table-sm'>
            <thead className='table_Head'>
                <tr>
                    <th className='input-group-text-table'>Producto Id</th>
                    <th className='input-group-text-table'>Producto nombre</th>
                    <th className='input-group-text-table'>Producto descripcion</th>
                    <th className='input-group-text-table'>Producto precio</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((item, index) => (
                        <tr key={index}>
                            <td className='form-control-products'>{item.codigo_Producto}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.presio}</td>

                        </tr>
                    ))
                }

            </tbody>
        </table>

    </div>
  )
}
