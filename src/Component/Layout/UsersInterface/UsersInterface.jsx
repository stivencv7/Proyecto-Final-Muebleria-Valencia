import React from 'react'
import { UsersList } from '../SearchUser/SearchUser'
import { UsersListGeneral } from '../UsersListGeneral/UsersListGeneral'

export const UsersInterface = () => {
  return (
    <div>
        <div>
            <UsersList/>
        </div>
        <br /><br /><hr />
        <div>
            <UsersListGeneral/>
        </div>
    </div>
  )
}
