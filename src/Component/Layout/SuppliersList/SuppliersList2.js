import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export class DataTableSortDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suppliers: [
                {"id": "123456789","name": "Jhon","Telefono": "987654321"},
                {"id": "987654321","name": "Test","Telefono": "123456789"},        
            ],
            multiSortMeta: [{ field: 'category', order: -1 }]
        };

    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Lista de proveedores</h5>
                    <DataTable value={this.state.suppliers} responsiveLayout="scroll">
                        <Column field="id" header="Cedula" sortable></Column>
                        <Column field="name" header="Nombre" sortable></Column>
                        <Column field="Telefono" header="Telefono" sortable></Column>
                    </DataTable>
                </div>

                
            </div>
        );
    }
}
                 