import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export const Categories = () => {

  return (   
    <nav id='categories'>
        <ul>
            <li>
                <a href="">Categorias</a>
                <ul>
                    <Link to='/beds' className='links'>Camas</Link>
                    <Link to='/furniture' className='links'>Muebles</Link>
                </ul>
            </li>
        </ul>
    </nav>
  )
}
