import React from 'react'
import { Com_Button } from '../../Component/UI/Com_Button/Com_Button';

export const ServiceProduct_Update = () => {

    const urlUpdate = "http://localhost:8080/productos/actualizar/";

    function updateProduct() {
        console.log("jjjj")
        fetch(urlUpdate + document.getElementById("input_buscar").value, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                codigo_Producto: document.getElementById("c").value,
                nombre: document.getElementById("n").value,
                descripcion: document.getElementById("d").value,
                precio: document.getElementById("p").value
            })
        })
            .then((responce) => {
                console.log(responce)
                validetion(responce.ok)
                return responce.json();
            })


    }


    function validetion(elemnt) {
        if (elemnt == true) {
            alert("Actualizado Correctamente")
            document.getElementById("c").value = ""
            document.getElementById("n").value = ""
            document.getElementById("d").value = ""
            document.getElementById("p").value = ""
        } else {
            alert("No pudo ser actualizado")
        }
    }

    return (
        <Com_Button action={updateProduct} text="Actualizar" />
    )
}
