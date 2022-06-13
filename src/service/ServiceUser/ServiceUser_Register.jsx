import React,{useState} from 'react'
import { FormRegisterUsers } from '../../Component/Layout/FormRegisterUsers/FormRegisterUsers';

export const ServiceUser_Register = () => {
  
  const [codeUser, setCodeUser] = useState(0)
  const [name_user, setUserName] = useState("")
  const [surname_user, setSurnameUser] = useState("")
  const [idUser, setIdUser] = useState("")
  const [dateBirthUser, setDatebirthUser] = useState("")
  const [cellphonenumber_user, setCellphonenumberUser] = useState("")
  const [email_user, setEmailUser] = useState("")
  const [password_user, setPasswordUser] = useState("")
  
  const catchCode = (even) => {
    setCodeUser(even.target.value)
  }

  const catchName = (even) => {
    setUserName(even.target.value)
  }

  const catchSurname = (even) => {
    setSurnameUser(even.target.value)
  }

  const catchId = (even) => {
    setIdUser(even.target.value)
  }

  const catchDateBirth = (even) => {
    setDatebirthUser(even.target.value)
  }
  
  const catchCellphonenumber = (even) => {
    setCellphonenumberUser(even.target.value)
  }

  const catchEmail = (even) => {
    setEmailUser(even.target.value)
  }

  const catchPassword = (even) => {
    setPasswordUser(even.target.value)
  }

  function registerUser() {

    const URL = "http://localhost:8080/clientes";
  
    fetch(URL, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            codigo: codeUser,
            cedula: idUser,
            nombre_cli: name_user,
            apellidoCli: surname_user,
            fechaNaciminCli: dateBirthUser,
            celular: cellphonenumber_user,
            correo_cli: email_user,
            password: password_user,
        })
    })
        .then(response => console.log(response.json()))
        .then(json => check(json.ok))

  }

  function check(element) {
    if (element == true) {
        alert("Registro exitoso")
    } else {
        alert("hubo un error al momento de registrar")
    }
  }

  return (
    <div>
      <FormRegisterUsers onChange1={catchCode} onChange2={catchName} onChange3={catchSurname} onChange4={catchId} onChange5={catchDateBirth} onChange6={catchCellphonenumber} onChange7={catchEmail} onChange8={catchPassword} onClick={registerUser}/>
    </div>
  )
}
