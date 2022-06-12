import React,{useState} from 'react'
import { FormLogin } from '../../Component/Layout/FormLogin/FormLogin'

export const ServiceLogin = () => {
  
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const catchEmail = (even) => {
        setEmail(even.target.value)
    }

    const catchPassword = (even) => {
        setPassword(even.target.value)
    }

    const login = () =>{
        const URLLogin = "http://localhost:8080/clientes/iniciarSesion/"
        fetch(URLLogin + email + "/" + password,{
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                correo: email,
                contraseña: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.cedula != ""){
                alert("FUNCIONA")
            }else{
                alert("NO FUNCIONA")
            }
        })
        .catch(error => console.error(error))
    }

    const URLBase = "http://localhost:8080/clientes/usuarios";


    function check(element) {
        if (element == true) {
            alert("Registro exitoso")
        } else {
            alert("hubo un error al momento de registrar")
        }
    }

    return (
        <div>
            <FormLogin onChange1={catchEmail} onChange2={catchPassword} action={login}/>
            <button type="button" id="Login" onClick={login}>Enviar</button>
        </div>
    )
}
