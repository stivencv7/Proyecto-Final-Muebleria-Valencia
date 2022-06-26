import React from 'react'
import './ButtonDark.css'

export const ButtonDark = () => {
    const darkMode = () => {
        const btnNocturno = document.querySelector("#nocturno");
        document.getElementById("container_Main").classList.toggle("dark");
        document.getElementById("subHeader").classList.toggle("dark");
        btnNocturno.classList.toggle("active");
      }
  return (
    <div>
      <button onClick={darkMode} className="nocturno" id="nocturno" >
        <i className="pi pi-sun" style={{'fontSize': '2em'}}></i>
        <i className="pi pi-moon" style={{'fontSize': '2em'}}></i>
      </button>
      <br />       
    </div>
    
  )
}
