import {useState,useEffect} from 'react'
import { IteratorListProduct } from '../../Component/Layout/IteratorListProduct/IteratorListProduct';

export const ServiceProducto_listar = () => {
    const url = 'http://localhost:8080/productos/productos-list';
    const [product, setProduct] = useState([])
    const getProducts = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }

    useEffect(() => {
        getProducts()
        //saveObj.push(objProduct)
        //setProductFound(saveObj)
    }, [product])

    return (
    <IteratorListProduct productos={product}/>
  )
}
