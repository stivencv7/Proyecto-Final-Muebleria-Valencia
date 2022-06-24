import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar/';
//import { Button } from 'primereact/button'

//import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
//import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";


export const PaginaPrincipal = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>


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

        </div >
    )
}
