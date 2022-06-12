import React from 'react'

export const FormRegisterUsers = ({ onChange1, onChange2, onChange3, onChange4, onChange5, onChange6, onChange7, onChange8, onClick }) => {
  return (
    <div>
        <div id='informacion'>
            <form>
                <input type="hidden" id="code_user"  onChange={onChange1} /> 
                <label>Nombres</label>
                <input type="text" id='name_user' onChange={onChange2} />
                <hr />
                <label>Apellidos</label>
                <input type="text" id='surname_user' onChange={onChange3} />
                <hr />
                <label>Cedula</label>
                <input type="text" id='id_user' onChange={onChange4}/>
                <hr />
                <label>fecha de nacimiento</label>
                <input type="date" id='datebirth' onChange={onChange5} /> 
                <hr />
                <label>Numero celular</label>
                <input type="text" id='cellphonenumber_user' onChange={onChange6} />
                <hr />
                <label>Correo</label>
                <input type="email" id='email_user' onChange={onChange7} />
                <hr />
                <label>Contraseña</label>
                <input type="password" id='password_user' onChange={onChange8} />
                <hr />
                <div>
                    <input type="button" value="Registrar Usuario" onClick={onClick} />     
                </div>
            </form>
        </div>
    </div>
  )
}
