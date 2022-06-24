import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import '../Beds/DataViewDemo.css';
import img from '../../../Images/mueble1.PNG'
import img2 from '../../../Images/mueble2.PNG'

export class DataViewFurniture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: {
                name1 : "Mueble",
                description : "Estructura en madera pino Espumas de alta densidad espaldar y asiento D-26, D-20, D18 y penta D-26 Pata bola Herraje tijera, sistema que permite el movimiento Tela suave, fresca y en colores surtidos el cual permite ajustarlo a posiciones diferentes, es una con cualquier tipo de decoración, su diseño ergonómico brinda.",
                price : 2000000,
                name2 : "Mueble",
                description2 : "Su comodidad permite disfrutar agradables espacios de descanso, lectura o ver la TV, los detalles como las costuras en líneas rectas lo hacen ver más agradable y resaltan su estilo clásico.",
                price2 : 2700000
            },
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null,
            imagen : "../../../Images/mueble1.PNG"
        };

    }

    render() {

        return (
            <div className="dataview-demo">
                <div className='container1'>
                    <div className="col-12">
                        <div className="product-list-item">
                            <img src={img} className='imgBed2'></img>
                            <div className="product-list-detail">
                                <div className="product-name">{this.state.products.name1}</div>
                                <div className="product-description">{this.state.products.description}</div>
                            </div>
                            <div className="product-list-action">
                                <span className="product-price">${this.state.products.price}</span>
                                <Button icon="pi pi-shopping-cart" label="Añadir al carrito"></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container1">
                    <div className="col-12">
                        <div className="product-list-item">
                            <img src={img2} className='imgBed2'></img>
                            <div className="product-list-detail">
                                <div className="product-name">{this.state.products.name2}</div>
                                <div className="product-description">{this.state.products.description2}</div>
                            </div>
                            <div className="product-list-action">
                                <span className="product-price">${this.state.products.price2}</span>
                                <Button icon="pi pi-shopping-cart" label="Añadir al carrito"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
                 