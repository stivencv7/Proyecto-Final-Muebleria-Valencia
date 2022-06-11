import { useEffect, useState } from 'react'
import { GetProduct } from '../../Component/Layout/GetProduct/GetProduct';
import { Comp_Input } from '../../Component/UI/Comp_Input/Comp_Input';

export const ServiceProduct_Search = () => {
    const urlSearch = 'http://localhost:8080/productos/buscar/';
    const [productFound, setProductFound] = useState([])
    // const [objProduct, setObjProduct] = useState({})
    const input_search = document.getElementById("input_buscar")
    const saveObj = []
    const [objProduct, setObjProduct] = useState({})
    const [valueInput, setvalueInput] = useState(0)

    function searchForID() {
        setvalueInput(input_search.value)
        fetch(urlSearch + input_search.value)
            .then(response => response.json())
            .then(data => {
                // setProductFound(data)
                setObjProduct(data)
                console.log(data.codigo_Producto)


            })
        console.log(valueInput)
    }

    useEffect(() => {
        saveObj.push(objProduct)
        setProductFound(saveObj)
        console.log(valueInput)

    }, [objProduct])

    return (
        <div>
            <Comp_Input id='input_buscar' type="number" />
            <button onClick={searchForID}>buscar</button>
            <hr />
            <GetProduct variable={valueInput} productFound={productFound} />

        </div>
    )
}
