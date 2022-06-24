import React from 'react'
import { FormRegisterSuppliers2 } from '../FormRegisterSuppliers/FormRegisterSuppliers'
// import { SuppliersList } from '../SuppliersList/SuppliersList'
// import { FormRegisterSuppliers } from '../FormRegisterSuppliers/FormRegisterSuppliers'
import { DataTableEditSuppliers } from '../SearchSupplier/EditSupplier'
// import { SearchSupplier } from '../SearchSupplier/SearchSupplier'
import { DataTableSortDemo } from '../SuppliersList/SuppliersList2'


export const SuppliersInterface = () => {
  return (
    <div>
        <div>
            <FormRegisterSuppliers2/>
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
