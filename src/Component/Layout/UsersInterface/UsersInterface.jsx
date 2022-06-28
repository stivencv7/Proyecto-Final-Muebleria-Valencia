import React from 'react'
import { DataTableEditUsers } from '../EditUsers/EditUsers'
// import { UsersList } from '../SearchUser/SearchUser'
import { DataTableUsers } from '../UsersListGeneral/UsersList'
// import { UsersListGeneral } from '../UsersListGeneral/UsersListGeneral'
import { Link } from 'react-router-dom'
import { Logo } from '../../UI/Logo/Logo'
import './UsersInterface.css'

export const UsersInterface = () => {
  return (
    <div>
      <div>
        <header className='header-admin-editUsers'>
          <Logo estylo={'title-main'}/>
          <h2>Menu Usuarios</h2>
          <nav className='icons'>
            <Link className='icon' to="/homeadmin"><i className="pi pi-home ico" ></i></Link>
          </nav>
        </header>
        </div>
        <div className='content-users'>
          <DataTableUsers/>
        </div>
    </div>
  )
}
