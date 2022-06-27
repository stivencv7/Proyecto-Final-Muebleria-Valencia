import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from 'primereact/dialog';
import { Sidebar } from 'primereact/sidebar/';
import { Logo } from '../../UI/Logo/Logo';
import { Button } from 'primereact/button';
import wardrobe from '../../../Images/armario.jpeg'
import bed from '../../../Images/cama2.PNG'
import './NavHome.css'

export const NavHome = () => {

    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)

    const onHide = () => {
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const header=(
        <div className='div-login'>
            <Logo estylo='title-login' text='Inicio Sesion'/>
       </div>
       
    )
   
    return (
        <nav className='icons'>
            <Link className='icon' to="/"><i className="pi pi-home ico" ></i></Link> 
            <Sidebar position='right' visible={visible2} style={{ width: '30em' }} onHide={() => setVisible2(false)}>
                <div>
                    <div className='infoProduct'>                        
                        <img src={wardrobe} alt="Armario" className='imgShoppingCart'/>
                        <br />
                        <i className='pi pi-trash'></i>
                        <p>1.22 ancho</p>
                        <p>1.52 alto</p>
                        <p>Armario cafe</p>
                        <p>Precio: 1.500.000</p>
                        <div className='clear'></div>
                    </div>
                    <label>Cantidad</label>
                    <br />
                    <input type="number" placeholder='1' className='inputShoppingCart' min="1"/>
                    <hr />
                    <div>
                        <img src={bed} alt="Armario" className='imgShoppingCart'/>
                            <br />
                            <i className='pi pi-trash'></i>
                            <p>1.50 ancho</p>
                            <p>2.00 alto</p>
                            <p>Colchon ortopedico</p>
                            <p>Cama blanca</p>
                            <p>Precio: 2.250.000</p>
                            <div className='clear'></div>
                    </div>
                    <label>Cantidad</label>
                    <br />
                    <input type="number" placeholder='1' className='inputShoppingCart' min="1"/>
                    <hr />
                    <div className='bottomShoppingCart'>
                        <h2 className='totalPrice'>Total: 3.750.000</h2>
                        <Button label="Finalizar Pedido" aria-label="Submit"></Button>
                    </div>
                </div>   
            </Sidebar>
            <div className="inf">
                <button className='icon'  onClick={(e) => setVisible2(true)} ><i className="pi pi-shopping-cart ico"></i></button>
                <span className="tool-text">
                    menu
                </span>
            </div>

       
            
            <button className='icon' onClick={() => onHide(onHide)} ><i className="pi pi-user"></i></button>
            <Dialog header={header}   className='dialogo-login' visible={visible} style={{ width: '30em', height: '22em'}} modal onHide={onHide}>
               
                <form action="" className='form-login'>
                  
                    <div className='content-login'>
                        <input type="email" id='email' style={{ width: '20em', height: '32px' }} placeholder='email' />
                        <input type="password" id='password' placeholder='password' style={{ width: '20em', height: '32px' }} />
                        
                    </div>
                    <div><Button className='button-login'>Iniciar Sesión</Button></div>
                    
                   
                    <Link  to="/registerUser">¿No tienes una cuenta? Registrar</Link>
                </form>
            </Dialog>
        </nav>

    )
}
