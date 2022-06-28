import React from 'react'
import { CrudProvedor } from '../CrudProvedor/CrudProvedor'
import { FormRegisterSuppliers2 } from '../FormRegisterSuppliers/FormRegisterSuppliers'
// import { SuppliersList } from '../SuppliersList/SuppliersList'
// import { FormRegisterSuppliers } from '../FormRegisterSuppliers/FormRegisterSuppliers'
import { DataTableEditSuppliers } from '../SearchSupplier/EditSupplier'
// import { SearchSupplier } from '../SearchSupplier/SearchSupplier'
import { DataTableSortDemo } from '../SuppliersList/SuppliersList2'
import "../../UI/Home/HomeAdmin.css"
import './SuppliersInterface.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../UI/Logo/Logo'

export const SuppliersInterface = () => {
  return (
    <div>
        <div>
          <header className='header-admin'>
                <Logo estylo={'title-main'}/>
                <h2>Menu Proveedor</h2>
                <nav className='icons'>
                    <Link className='icon' to="/homeadmin"><i className="pi pi-home ico" ></i></Link>
                </nav>
                </header>
        </div>
      <div className='content-suppliers'>
        <CrudProvedor></CrudProvedor>
      </div>
    </div>
  )
}
