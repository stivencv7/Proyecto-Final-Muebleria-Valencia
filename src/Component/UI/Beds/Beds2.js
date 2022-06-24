import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import './DataViewDemo.css';
import img from '../../../Images/cama1.jpg'
import img2 from '../../../Images/cama2.PNG'

export class DataViewDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: {
                name1 : "Cama",
                description : "constituida por un somier articulado que se acciona por medio de un motor eléctrico.",
                price : 1500000,
                name2 : "Cama",
                description2 : "Es una cama para una sola persona, de hasta 105 cm de ancho. La medida estándar de una cama individual es de 90×190 cm",
                price2 : 1200000
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
                 