import React from 'react'
import { CrudProduct } from '../CrudProduct/CrudProduct';
import { FormRegisterProducts } from '../FormRegisterProducts/FormRegisterProds';
// import { ServiceProduct_Register } from '../../../service/ServiceProduct/ServiceProduct_Register';
import { DataTableEditProducts } from '../GetProduct/EditProduct';
// import { ServiceProduct_Search } from '../../../service/ServiceProduct/ServiceProduct_Search';
// import { ServiceProducto_listar} from '../../../service/ServiceProduct/ServiceProducto_listar';
import { DataTableProducts } from '../IteratorListProduct/ProductsList'
import './styleproduct.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../UI/Logo/Logo'
export const ProductsInterface = () => {
  return (
    <div>
        <div>
          <header className='header-admin'>
                <Logo estylo={'title-main'}/>
                <h2>Menu Productos</h2>
                <nav className='icons'>
                    <Link className='icon' to="/homeadmin"><i className="pi pi-home ico" ></i></Link>
                </nav>
                </header>
        </div>
      <div className='content-product'>
        <CrudProduct></CrudProduct>
      </div>
    </div>
  )
}
