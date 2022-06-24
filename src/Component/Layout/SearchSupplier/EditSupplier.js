import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import '../EditUsers/DataTableDemo.css';
import '../UsersListGeneral/users.css'

export class DataTableEditSuppliers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suppliers1: [
                {"id": "1","name": "Jaider","cellphoneNumber": "128731"},
                {"id": "2","name": "Ermen","cellphoneNumber": "82992013"}
            ],
            editingRows: {}
        };

    }

    // isPositiveInteger(val) {
    //     let str = String(val);
    //     str = str.trim();
    //     if (!str) {
    //         return false;
    //     }
    //     str = str.replace(/^0+/, "") || "0";
    //     let n = Math.floor(Number(str));
    //     return n !== Infinity && String(n) === str && n >= 0;
    // }

    // onCellEditComplete(e) {
    //     let { rowData, newValue, field, originalEvent: event } = e;

    //     switch (field) {
    //         case 'quantity':
    //         case 'price':
    //             if (this.isPositiveInteger(newValue))
    //                 rowData[field] = newValue;
    //             else
    //                 event.preventDefault();
    //             break;

    //         default:
    //             if (newValue.trim().length > 0)
    //                 rowData[field] = newValue;
    //             else
    //                 event.preventDefault();
    //             break;
    //     }
    // }

    // onRowEditComplete1(e) {
    //     let products1 = [...this.state.products2];
    //     let { newData, index } = e;

    //     products1[index] = newData;

    //     this.setState({ products1 });
    // }

    // onRowEditChange(e) {
    //     this.setState({ editingRows: e.data });
    // }

    // setActiveRowIndex(index) {
    //     let editingRows = { ...this.state.editingRows, ...{ [`${this.state.products1[index].id}`]: true } };
    //     this.setState({ editingRows });
    // }

    cellEditor(options) {
        if (options.field === 'price')
            return this.priceEditor(options);
        else
            return this.textEditor(options);
    }

    textEditor(options) {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    // statusEditor(options) {
    //     return (
    //         <Dropdown value={options.value} options={this.statuses} optionLabel="label" optionValue="value"
    //             onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
    //             itemTemplate={(option) => {
    //                 return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
    //             }} />
    //     );
    // }

    // priceEditor(options) {
    //     return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    // }

    // statusBodyTemplate(rowData) {
    //     return this.getStatusLabel(rowData.inventoryStatus);
    // }

    // priceBodyTemplate(rowData) {
    //     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    // }

    render() {
        return (
            <div className="datatable-editing-demo">
                <Toast ref={(el) => this.toast = el} />
                <div className="card p-fluid">
                    <h5>Editar Proveedor</h5>
                    <DataTable value={this.state.suppliers1} editMode="row" dataKey="id"  onRowEditComplete={this.onRowEditComplete1} responsiveLayout="scroll">
                        <Column field="id" header="Cedula" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="name" header="Nombre" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="cellphoneNumber" header="Telefono" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
}
                 