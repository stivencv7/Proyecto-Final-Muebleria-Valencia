import { FormRegister } from "../../Layout/FormRegisterUsers/FormRegister";

import React from 'react'
import { MainHeader } from "../../Layout/MainHeader/MainHeader";
import '../../Layout/FormRegisterUsers/FormDemo.css'
export const RegisterUser = () => {
  return (

    <div>
      <MainHeader></MainHeader>
      <div className="page-formUser">
        <FormRegister/>
      </div>
    </div>
  )
}
