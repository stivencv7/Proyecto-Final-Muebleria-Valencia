import React from 'react'
import { SuppliersList } from '../SuppliersList/SuppliersList'
import { FormRegisterSuppliers } from '../FormRegisterSuppliers/FormRegisterSuppliers'
import { SearchSupplier } from '../SearchSupplier/SearchSupplier'

export const SuppliersInterface = () => {
  return (
    <div>
        <div>
            <FormRegisterSuppliers/>
        </div>
        <br /><br /><hr />
        <div>
            <SearchSupplier/>
        </div>
        <br /><br /><hr />
        <div>
            <SuppliersList/>
        </div>
    </div>
  )
}
