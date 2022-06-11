/** 
import React from 'react'




export const ServiceProduct_Delete = ({search}) => {
  
    const urlDelete = 'http://localhost:8080/servicioProductos/eliminar/';
  
    function deleteProduct() {
        fetch(urlDelete+search , { method: 'DELETE' })
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
    <div></div>
  )
}
**/