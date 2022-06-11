
import React from 'react'

export const ServiceProduct_Delete = ({ variable }) => {

    const urlDelete = 'http://localhost:8080/productos/eliminar/';

    function deleteProduct() {
        console.log(variable)
        fetch(urlDelete + document.getElementById("input_buscar").value, { method: 'DELETE' })
            .then(response => response)
            .then(respuesta => {
                if (respuesta.status == 200) {
                    document.getElementById("idprodut").value = ""
                    document.getElementById("name_product").value = ""
                    document.getElementById("descripcion").value = ""
                    document.getElementById("press").value = ""
                }
            })
    }

    return (
        <button onClick={deleteProduct}>Eliminar</button>
    )
}
