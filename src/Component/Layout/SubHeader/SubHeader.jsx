import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar/';

export const SubHeader = () => {
    
    const [visible, setVisible] = useState(false);
    return (
        <div className='subHeader' id='subHeader'>
             <Sidebar visible={visible} style={{ width: '15em' }} onHide={() => setVisible(false)}>
                <div>
                    <label htmlFor="press">Precio maximo</label>
                    <input type="number" id="press" placeholder='fitrar por precio maximo..' />

                    <label htmlFor="press">Precio minimo</label>
                    <input type="number" id="press" placeholder='fitrar por precio minimo..' />
                    <hr />
                    <select name="" id="">
                        <option value="">Cat</option>
                        <option value="">armarios</option>
                        <option value="">camas</option>
                        <option value="">Base camas</option>
                    </select>
                </div>
            </Sidebar>

            <div className="inf">
                <button className='button-menu' onClick={(e) => setVisible(true)} >☰</button>
                <span className="tool-text">
                    menu
                </span>
            </div>

       
            <nav className='subNav'>
                <Link className='sunbNavLink' to="Quienes-Somos">Quienes Somos</Link>
                <Link className='sunbNavLink' to="dudas-preguntas">Ayuda</Link>
                <Link className='sunbNavLink' to="dudas-preguntas">Contacto</Link>
            </nav>
        </div>
    )
}