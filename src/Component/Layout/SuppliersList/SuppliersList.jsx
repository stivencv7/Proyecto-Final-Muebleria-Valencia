import React from 'react'

export const SuppliersList = ({ suppliers = [] }) => {
  return (
    <div>
        <h1 className="text-center">Lista de Proveedores</h1>
        <table className='table table-sm'>
            <thead className='table_Head'>
                <tr>
                    <th className='input-group-text-table'>Cedula proveedor</th>
                    <th className='input-group-text-table'>Nombre proveedor</th>
                    <th className='input-group-text-table'>Telefono proveedor</th>    
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map((item, index) => (
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
