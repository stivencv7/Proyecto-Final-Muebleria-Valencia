import React from 'react'
import { ServiceProduct_Delete} from '../../../service/ServiceProduct/ServiceProduct_Delete';
import { ServiceProduct_Register } from '../../../service/ServiceProduct/ServiceProduct_Register';
import { ServiceProduct_Search } from '../../../service/ServiceProduct/ServiceProduct_Search';
import { ServiceProducto_listar} from '../../../service/ServiceProduct/ServiceProducto_listar';

export const ProductsInterface = () => {
  return (
    <div>
        <ServiceProduct_Search/>
        <ServiceProduct_Register/>
        <ServiceProducto_listar/>
    </div>
  )
}
