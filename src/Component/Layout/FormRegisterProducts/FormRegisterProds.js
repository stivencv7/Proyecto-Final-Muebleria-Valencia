import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Logo } from '../../UI/Logo/Logo'
import { Link } from 'react-router-dom'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import '../FormRegisterUsers/FormDemo.css';
import './FormRegisterProducts.css'

export const FormRegisterProducts = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
  
    const formik = useFormik({
        initialValues: {
            name: '',
            description : '',
            price : '',
            accept: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Se requiere el nombre.';
            }
            if(!data.description){
                errors.description = 'Se requiere la descripcion.';
            }
            if(!data.price){
                errors.price = 'Se requiere el precio.';
            }
            
            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);

            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <div>
            <div className="form-demo">
                <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="flex align-items-center flex-column pt-6 px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Registro Exitoso!</h5>
                        <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                            El producto <b>{formData.name}</b> ; fue registrado con exito.
                        </p>
                    </div>
                </Dialog>

                    <div className="card2">
                    <h1>Registrar Producto</h1>
                        <form onSubmit={formik.handleSubmit} className="p-fluid">
                            <div className="field">
                                <span className="p-float-label">
                                    <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                    <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Nombre*</label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>
                            <br/>
                            <div className="field">
                                <span className="p-float-label">
                                    <InputText id="description" name="descripcion" value={formik.values.description} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                    <label htmlFor="description" className={classNames({ 'p-error': isFormFieldValid('description') })}>Descripcion*</label>
                                </span>
                                {getFormErrorMessage('description')}
                            </div>
                            <br/>
                            <div className="field">
                                <span className="p-float-label">
                                    <InputText id="price" name="price" value={formik.values.price} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                    <label htmlFor="price" className={classNames({ 'p-error': isFormFieldValid('price') })}>Precio*</label>
                                </span>
                                {getFormErrorMessage('price')}
                            </div>
                            <Button type="submit" label="Registrar" className="mt-2" />
                        </form>
                    </div>
                
            </div>
        </div>
    );
}
                 