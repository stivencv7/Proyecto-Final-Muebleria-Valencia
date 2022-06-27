import React from 'react'
import { FormRegisterProducts } from '../FormRegisterProducts/FormRegisterProds';
// import { ServiceProduct_Register } from '../../../service/ServiceProduct/ServiceProduct_Register';
import { DataTableEditProducts } from '../GetProduct/EditProduct';
// import { ServiceProduct_Search } from '../../../service/ServiceProduct/ServiceProduct_Search';
// import { ServiceProducto_listar} from '../../../service/ServiceProduct/ServiceProducto_listar';
import { DataTableProducts } from '../IteratorListProduct/ProductsList'

export const ProductsInterface = () => {
  return (
    <div>
        <FormRegisterProducts/>
        <DataTableEditProducts/>
        <DataTableProducts/>
    </div>
  )
}
