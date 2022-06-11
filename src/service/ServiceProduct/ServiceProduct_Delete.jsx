
import React from 'react'

export const ServiceProduct_Delete = ({ variable }) => {


    const urlDelete = 'http://localhost:8080/productos/eliminar/';

    function deleteProduct() {


        if (window.confirm("Quieres seguir con esta accion") == true) {
            console.log(variable)
            fetch(urlDelete + document.getElementById("input_buscar").value, { method: 'DELETE' })
                .then(response => response)
                .then(respuesta => {
                    if (respuesta.status == 200) {
                        alert("se elimino correcta mente")
                        document.getElementById("idprodut").value = ""
                        document.getElementById("name_product").value = ""
                        document.getElementById("descripcion").value = ""
                        document.getElementById("press").value = ""
                    } else {
                        alert("Oops no elimino correcta mente")
                    }
                })

        } else {
            alert("No se completo la action")
        }



    }

    return (
        <button onClick={deleteProduct}>Eliminar</button>
    )
}
