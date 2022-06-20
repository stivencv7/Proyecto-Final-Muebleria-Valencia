import React from 'react'
import { Link } from 'react-router-dom'

export const HomeAdmin = () => {
  return (
    <div>
        <div className='homeAdminNavigator'>
          <br/>
          <Link to="/productsInterface" className='linksHomeAdmin'><span>Productos</span></Link>
          <br />
          <Link to="/usersInterface" className='linksHomeAdmin'><span>Usuarios</span></Link>
          <br />
          <Link to="/suppliersInterface" className='linksHomeAdmin'><span>Proveedores</span></Link>
        </div>
        <div className='manual'>
          <h1>Manual de uso</h1>
          <br />
          <p>Dale click al link de productos para dirigirte al menú de gestion de productos, en este menú se encuentran las opciones de: editar un producto, eliminar un producto , buscar un producto y agregar nuevos productos.</p>
          <p>Dale click al link de usuarios para dirigirte al menú de gestion de usuarios, en este menú se encuentran las opciones de: editar un usuario, eliminar un usuario y buscar un usuario.</p>
          <p>Dale click al link de proveedores para dirigirte al menú de gestion de proveedores, en este menú se encuentran las opciones de: editar un proveedor, eliminar un proveedor , buscar un proveedor y agregar nuevos proveedores.</p>
        </div>
    </div>
  )
}
