import React from 'react'

export const FormLogin = ({onChange1 , onChange2 , action}) => {
  return (
    <div >
      <h1>Inicia sesion</h1>
        <div id='informacion'>
            <form>
                <br />
                <label className='input-group-text-login'>Correo</label>
                <input type="email" id="email" className="form-control-login" aria-describedby="emailHelp" onChange={onChange1} />
                <br />
                <label className='input-group-text-login'>Contraseña</label>
                <input type="password" id="password" className="form-control-login" aria-describedby="emailHelp" onChange={onChange2} />
            </form>
        </div>
    </div>
  )
}
