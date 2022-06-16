import React from 'react'

export const FormLogin = ({onChange1 , onChange2 , action}) => {
  return (
    <div>
        <div id='informacion' className='mb-3'>
            <form>
                <br />
                <label className='form-label'>Correo</label>
                <input type="email" id="email" class="form-control" aria-describedby="emailHelp" onChange={onChange1} />
                <label className='form-label'>Contraseña</label>
                <input type="password" id="password" class="form-control" aria-describedby="emailHelp" onChange={onChange2} />
            </form>
        </div>
    </div>
  )
}
