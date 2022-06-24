import React from 'react'
// import { SuppliersList } from '../SuppliersList/SuppliersList'
import { FormRegisterSuppliers } from '../FormRegisterSuppliers/FormRegisterSuppliers'
import { DataTableEditSuppliers } from '../SearchSupplier/EditSupplier'
// import { SearchSupplier } from '../SearchSupplier/SearchSupplier'
import { DataTableSortDemo } from '../SuppliersList/SuppliersList2'


export const SuppliersInterface = () => {
  return (
    <div>
        <div>
            <FormRegisterSuppliers/>
        </div>
        <br /><br /><hr />
        <div>
            <DataTableEditSuppliers/>
        </div>
        <br /><br /><hr />
        <div>
            <DataTableSortDemo/>
        </div>
    </div>
  )
}
