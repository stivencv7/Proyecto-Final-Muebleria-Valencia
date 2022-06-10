import React from 'react'

export const FormLogin = ({onChange1 , onChange2 , action}) => {
  return (
    <div>
        <div id='informacion'>
            <form>
                <label >Correo</label>
                <input type="email" id="email" onChange={onChange1} />
                <label >Contraseña</label>
                <input type="password" id="password" onChange={onChange2} />
            </form>
        </div>
    </div>
  )
}
