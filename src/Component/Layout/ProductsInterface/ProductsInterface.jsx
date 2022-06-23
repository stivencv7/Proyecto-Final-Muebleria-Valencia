import React from 'react'
import { ServiceProduct_Register } from '../../../service/ServiceProduct/ServiceProduct_Register';
import { ServiceProduct_Search } from '../../../service/ServiceProduct/ServiceProduct_Search';
// import { ServiceProducto_listar} from '../../../service/ServiceProduct/ServiceProducto_listar';
import { DataTableProducts } from '../IteratorListProduct/ProductsList'

export const ProductsInterface = () => {
  return (
    <div>
        <ServiceProduct_Search/>
        <ServiceProduct_Register/>
        <DataTableProducts/>
    </div>
  )
}
