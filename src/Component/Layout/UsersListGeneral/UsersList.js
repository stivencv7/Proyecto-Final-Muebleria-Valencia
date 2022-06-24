import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './users.css'

export class DataTableUsers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [
                {"id": "123456789","name": "B","surname": "Tabla" , "dateOfBirth" : "20/02/2004" , "cellphoneNumber" : "1234" , "email" : "p@gmail.com"},
                {"id": "0987","name": "C","surname": "Tabla" , "dateOfBirth" : "00/00/0000" , "cellphoneNumber" : "1029" , "email" : "la@gmail.com"},
                {"id": "1234","name": "A","surname": "Tabla" , "dateOfBirth" : "11/11/1111" , "cellphoneNumber" : "218" , "email" : "as@gmail.com"}        
            ],
            multiSortMeta: [{ field: 'category', order: -1 }]
        };

    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Lista de usuarios</h5>
                    <DataTable value={this.state.users} responsiveLayout="scroll">
                        <Column field="id" header="Cedula" sortable></Column>
                        <Column field="name" header="Nombre" sortable></Column>
                        <Column field="surname" header="Apellido" sortable></Column>
                        <Column field="dateOfBirth" header="Fecha de nacimiento" sortable></Column>
                        <Column field="cellphoneNumber" header="Telefono" sortable></Column>
                        <Column field="email" header="Correo" sortable></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
}