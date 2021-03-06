import React from 'react'
import 'primeicons/primeicons.css';
import { Pruebas } from '../../UI/Home/Pruebas';
import user from '../../../Images/registro.webp'
import { InputText } from 'primereact/inputtext';

export const FormRegisterUsers = ({ onChange1, onChange2, onChange3, onChange4, onChange5, onChange6, onChange7, onChange8, onClick }) => {
  
  const next = () => {
      document.getElementById("name_user").classList.add("hide")
      document.getElementById("name_user2").classList.add("hide")
      document.getElementById("surname_user").classList.add("hide")
      document.getElementById("surname_user2").classList.add("hide")
      document.getElementById("id_user").classList.add("hide")
      document.getElementById("id_user2").classList.add("hide")
      document.getElementById("btnNext").classList.add("hide")
      document.getElementById("datebirth").classList.add("hide")
      document.getElementById("datebirth2").classList.add("hide")
      document.getElementById("cellphonenumber_user").classList.add("hide")
      document.getElementById("cellphonenumber_user2").classList.add("hide")
      document.getElementById("data").classList.remove("form")
      document.getElementById("data").classList.add("formRegister2")
      document.getElementById("password_user").classList.remove("hide")
      document.getElementById("password_user2").classList.remove("hide")
      document.getElementById("email_user").classList.remove("hide")
      document.getElementById("email_user2").classList.remove("hide")
      document.getElementById("password_user").classList.add("show")
      document.getElementById("password_user2").classList.add("show1")
      document.getElementById("email_user").classList.add("show2")
      document.getElementById("email_user2").classList.add("show3")
      document.getElementById("btnRegister").classList.add("btnRegisterShow")
      document.getElementById("btnRegister").classList.remove("btnRegister")
      document.getElementById("btnBack").classList.remove("btnBack")
      document.getElementById("btnBack").classList.add("btnBack2")
      document.getElementById("titleUserData").textContent = "Paso 2";
      document.getElementById("subtitleUserData").textContent = "Informacion para el registro del usuario";
      document.getElementById("userImg").classList.add("userImgNext")
      document.getElementById("userImg").classList.remove("userImg")
      document.getElementById("container_Steps").classList.remove("container_Steps")
      document.getElementById("container_Steps").classList.add("container_Steps2")
    }

    const back = () => {
      document.getElementById("name_user").classList.remove("hide")
      document.getElementById("name_user2").classList.remove("hide")
      document.getElementById("surname_user").classList.remove("hide")
      document.getElementById("surname_user2").classList.remove("hide")
      document.getElementById("id_user").classList.remove("hide")
      document.getElementById("id_user2").classList.remove("hide")
      document.getElementById("btnNext").classList.remove("hide")
      document.getElementById("datebirth").classList.remove("hide")
      document.getElementById("datebirth2").classList.remove("hide")
      document.getElementById("cellphonenumber_user").classList.remove("hide")
      document.getElementById("cellphonenumber_user2").classList.remove("hide")
      document.getElementById("data").classList.add("form")
      document.getElementById("data").classList.remove("formRegister2")
      document.getElementById("password_user").classList.add("hide")
      document.getElementById("password_user2").classList.add("hide")
      document.getElementById("email_user").classList.add("hide")
      document.getElementById("email_user2").classList.add("hide")
      document.getElementById("password_user").classList.remove("show")
      document.getElementById("password_user2").classList.remove("show1")
      document.getElementById("email_user").classList.remove("show2")
      document.getElementById("email_user2").classList.remove("show3")
      document.getElementById("btnRegister").classList.remove("btnRegisterShow")
      document.getElementById("btnRegister").classList.add("btnRegister")
      document.getElementById("btnBack").classList.add("btnBack")
      document.getElementById("btnBack").classList.remove("btnBack2")
      document.getElementById("titleUserData").textContent = "Paso 1";
      document.getElementById("subtitleUserData").textContent = "Informacion acerca del usuario";
      document.getElementById("userImg").classList.remove("userImgNext")
      document.getElementById("userImg").classList.add("userImg")
      document.getElementById("container_Steps").classList.remove("container_Steps2")
    }
    
  return (
    <div>
      <div className='container_Steps' id='container_Steps'>
        <Pruebas/>
      </div>
        <div id='data' className='form'>
          <br />
          <h1 id='titleUserData'>Paso 1</h1>
          <h3 id='subtitleUserData'>Informacion acerca del usuario</h3>
          <br />
            <form>
                <input type="hidden" id="code_user" onChange={onChange1} /> 
                <label id='name_user' className='input-group-text'>Nombres</label>
                <InputText tooltip="Ingresa tu nombre"  id='name_user2' className='form-control2' onChange={onChange2} />
                <br /><br />
                <label id='surname_user' className='input-group-text'>Apellidos</label>
                <input type="text" id='surname_user2' className='form-control2' onChange={onChange3} />
                <br /><br />
                <label id='id_user' className='input-group-text'>Cedula</label>
                <input type="text" id='id_user2' className='form-control2' onChange={onChange4}/>
                <br /><br />
                <label id='datebirth' className='input-group-text'>fecha de nacimiento</label>
                <input type="date" id='datebirth2' className='form-control2' onChange={onChange5} /> 
                <br /><br />
                <label id='cellphonenumber_user' className='input-group-text'>Numero celular</label>
                <input type="text" id='cellphonenumber_user2' className='form-control2' onChange={onChange6} />
                <br /><br />
                <img src={user} alt="" className='userImg' id='userImg'/>
                <label id='email_user' className='hide'>Correo</label>
                <input type="email" id='email_user2' className='hide' onChange={onChange7} />
                <label  id='password_user' className='hide'>Contrase??a</label>
                <input type="password" id='password_user2' className='hide' onChange={onChange8} />                
                <div>
                    <input type="button" value="Registrar Usuario" id='btnRegister' className='btnRegister' onClick={onClick} />     
                    <input type="button" value="Atras" id='btnBack' className='btnBack' onClick={back}/>
                    <input type="button" value="Siguiente" id='btnNext' className='btnNext' onClick={next} />     
                </div>
            </form>
            <br />
        </div>
    </div>
  )
}
