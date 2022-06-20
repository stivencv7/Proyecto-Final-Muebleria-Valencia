import {useEffect, useState} from 'react'
import { GetProduct } from '../../Component/Layout/GetProduct/GetProduct';
import { Comp_Input } from '../../Component/UI/Comp_Input/Comp_Input';

export const ServiceProduct_Search = () => {
    const urlSearch = 'http://localhost:8080/productos/buscar/';
    const [productFound, setProductFound] = useState([])
    // const [objProduct, setObjProduct] = useState({})
    const input_search = document.getElementById("input_buscar")
    const saveObj = []
    const [objProduct, setObjProduct] = useState({})
    function searchForID() {

        fetch(urlSearch + input_search.value)
            .then(response => response.json())
            .then(data => {
            // setProductFound(data)
                 setObjProduct(data)
                console.log(data)
            })
    }
    
    useEffect(()=>{
        saveObj.push(objProduct)
        setProductFound(saveObj)
    },[objProduct])

    return (
    <div>
        <br />
        <Comp_Input id='input_buscar' type="number"/>
        <button onClick={searchForID} className='btnSearchProduct'>Buscar</button>
        <br />
        <GetProduct productFound={productFound}  />
    </div>
  )
}
