import React from 'react'
import { DataTableEditUsers } from '../EditUsers/EditUsers'
// import { UsersList } from '../SearchUser/SearchUser'
import { DataTableUsers } from '../UsersListGeneral/UsersList'
// import { UsersListGeneral } from '../UsersListGeneral/UsersListGeneral'

export const UsersInterface = () => {
  return (
    <div>
        <div>
            <DataTableEditUsers/>
        </div>
        <br /><br /><hr />
        <div>
            <DataTableUsers/>
        </div>
    </div>
  )
}
