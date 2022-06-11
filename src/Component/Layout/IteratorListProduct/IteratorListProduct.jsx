import React from 'react'

export const IteratorListProduct = ({ productos = [] }) => {
  

  
  
  
    return (
        <div>
        <h1 className="text-center">Lista de Productos</h1>
        <table >
            <thead>
                <tr>
                    <td>Producto Id</td>
                    <td>Producto nombre</td>
                    <td>Producto descripcion</td>
                    <td>Producto presio</td>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((item, index) => (
                        <tr key={index}>
                            <td>{item.codigo_Producto}</td>
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
