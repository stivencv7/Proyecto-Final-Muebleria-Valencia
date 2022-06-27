import { FormRegister } from "../../Layout/FormRegisterUsers/FormRegister";

import React from 'react'
import { MainHeader } from "../../Layout/MainHeader/MainHeader";
import '../../Layout/FormRegisterUsers/FormDemo.css'
import { Footer } from "../../UI/Footer/Footer";


export const RegisterUser = () => {
  return (
    <div className="page-register-user" >
      <MainHeader></MainHeader>
      <div className="page-formUser">
        <div>
          <h1  className="title-form">¡¡Bienvenido se parte de Nosotros!!</h1>
        </div> 
        <div className="page-fom">
         <FormRegister/>
        </div> 
        <div className="page-register-footer">
          <Footer/>
      </div>
      </div>  
    </div>
  )
}
