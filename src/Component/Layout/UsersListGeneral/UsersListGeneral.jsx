import React from 'react'

export const UsersListGeneral = ({ usuarios = [] }) => {
  return (
    <div>
        <h1 className="text-center">Lista de Usuarios</h1>
        <table className='table table-sm'>
            <thead className='table_Head'>
                <tr>
                    <th className='input-group-text-table'>Cedula usuario</th>
                    <th className='input-group-text-table'>Nombre usuario</th>
                    <th className='input-group-text-table'>Apellido usuario</th>
                    <th className='input-group-text-table'>Correo usuario</th>
                    <th className='input-group-text-table'>Fecha de nacimiento usuario</th>
                    <th className='input-group-text-table'>Numero de celular usuario</th>
                    <th className='input-group-text-table'>Correo usuario</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((item, index) => (
                        <tr key={index}>
                            <td className='form-control-products'>{item.codigo_Producto}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.presio}</td>
                            <td>{item.presio}</td>
                            <td>{item.presio}</td>
                            <td>{item.presio}</td>
                            <td>{item.presio}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>
  )
}
