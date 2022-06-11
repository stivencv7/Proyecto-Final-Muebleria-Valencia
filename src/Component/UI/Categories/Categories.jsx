import React from 'react'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Categories = () => {
     
  return (
    <nav id='categories'>
        <ul>
            <li>
                <a href="">Categorias</a>
                <ul>
                    <li><a href="">Camas</a></li>
                    <li><a href="">Muebles</a></li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}
