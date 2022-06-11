
import React from 'react';
export const FormRegisterProducts = ({ onChange1, onChange2, onChange3, onChange4, onClick }) => {
    return (
        <div>
            <div id='informacion'>
                <form>

                    <input type="hidden" id="idprodut"  onChange={onChange1} /> 
                  

                    <label >nombre</label>
                    <input type="text" id='name_product' name='search' onChange={onChange2} />
                    

                    <label >Descripcion</label>
                    <textarea id='text' placeholder='descripcion' onChange={onChange3} ></textarea>

                    <label >Precio</label>
                     <input type="number" id='press' onChange={onChange4} /> 
                    
                    <div>
                         <input type="button" value="Registrar Prodcuto" onClick={onClick} /> 
                        
                    </div>

                </form>
            </div>
        </div>
    )
}
