import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export class DataTableProducts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {"code": "1","name": "Mesa de sala","description": "Azul y redonda" , "price" : 500000},
                {"code": "2","name": "Colchon","description": "Ortopedico" , "price" : 1000000},        
            ],
            multiSortMeta: [{ field: 'category', order: -1 }]
        };

    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Lista de productos</h5>
                    <DataTable value={this.state.products} responsiveLayout="scroll">
                        <Column field="code" header="Codigo" sortable></Column>
                        <Column field="name" header="Nombre" sortable></Column>
                        <Column field="description" header="Descripcion" sortable></Column>
                        <Column field="price" header="Precio" sortable></Column>
                    </DataTable>
                </div>

                
            </div>
        );
    }
}