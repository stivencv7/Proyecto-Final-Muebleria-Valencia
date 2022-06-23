import React from 'react'
import { UsersList } from '../SearchUser/SearchUser'
import { DataTableUsers } from '../UsersListGeneral/UsersList'
// import { UsersListGeneral } from '../UsersListGeneral/UsersListGeneral'

export const UsersInterface = () => {
  return (
    <div>
        <div>
            <UsersList/>
        </div>
        <br /><br /><hr />
        <div>
            <DataTableUsers/>
        </div>
    </div>
  )
}
