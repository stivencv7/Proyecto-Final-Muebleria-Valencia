import React,{useState} from 'react'

export const ServiceProduct_filterByPrice = () => {

    const [minimum , setMinimum] = useState(0)
    const [maximum , setMaximum] = useState(0)

    const catchMinimum = (even) => {
        setMinimum(even.target.value)
    }

    const catchMaximum = (even) => {
        setMaximum(even.target.value)
    }

    function filterByPrice () {
        const URL = "http://localhost:8080/productos/filtrar/";
    
        fetch(URL + minimum + "/" + maximum)
        .then(response => response.json())
    }
  return (
    <div>ServiceProduct_filterByPrice</div>
  )
}
