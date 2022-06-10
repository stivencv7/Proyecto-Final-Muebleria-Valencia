import React from 'react'
import { Componet_Input } from '../../UI/Componet_Input/Componet_Input'


export const FormRegisterProducts = ({ onChange1, onChange2, onChange3, onChange4, onClick }) => {
    return (
        <div>
            <div id='informacion'>
                <form>

                    {/* <input type="number" id="idprodut"  onChange={onChange1} /> */}
                    <Componet_Input type="number" id="idprodut" action={onChange1} />

                    <label >nombre</label>
                    {/* <input type="text" id='name_product' name='search' onChange={onChange2} /> */}
                    <Componet_Input type="text" id="name_product" action={onChange2} />

                    <label >Descripcion</label>
                    <textarea id='text' placeholder='descripcion' onChange={onChange3} ></textarea>

                    <label >Precio</label>
                    {/* <input type="number" id='press' onChange={onChange4} /> */}
                    <Componet_Input type="number" id="press" action={onChange4} />

                    <div>
                        {/* <input type="button" value="Registrar Prodcuto" onClick={onClick} /> */}
                        <Componet_Input type="button" id="Registrar Prodcuto" action={onClick} />
                    </div>

                </form>
            </div>
        </div>
    )
}
