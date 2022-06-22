import React, { Component } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import './StepsDemo.css';

export class Pruebas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 1
        };

        this.items = [
            {
                label: 'Primer paso',
                command: (event) => {
                    this.toast.show({ severity: 'info', summary: 'Informacion sobre el usuario', detail: event.item.label });
                }
            },
            {
                label: 'Segundo Paso',
                command: (event) => {
                    this.toast.show({ severity: 'info', summary: 'Informacion para el inicio de sesion', detail: event.item.label });
                }
            },
        ];
    }

    render() {
        return (
            <div className='steps-demo'>
                <br/><br/>
                <Toast ref={(el) => { this.toast = el }}></Toast>
                <div className="card">
                    <i className='pi pi-user' id='pi-user1'></i>
                    <i className='pi pi-user' id='pi-user2'></i>
                    <Steps model={this.items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({ activeIndex: e.index })} readOnly={false} id='steps'/>
                </div>
            </div>
        );
    }
}
                 