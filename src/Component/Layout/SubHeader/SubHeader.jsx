import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar/';

export const SubHeader = () => {
    
    const [visible, setVisible] = useState(false);
    return (

        <div className='subHeader'>
          
            <Sidebar  className='sidebar1' visible={visible} style={{ width: '23em' }} onHide={() => setVisible(false)} >
            <header><h1>Opciones</h1></header>

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