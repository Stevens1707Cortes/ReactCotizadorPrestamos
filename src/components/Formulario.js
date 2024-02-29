import React, {Fragment, useState} from 'react'
import { calcularTotal } from '../helpers';
const Formulario = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;

    // Definir state
    const [error, guardarError] = useState(false);

    // Cuando el usuario hace Submit
    const calcularPrestamo = (e) => {
        e.preventDefault();
        // Validar
        if ((isNaN(cantidad) || cantidad <= 0) || (plazo === '' || isNaN(plazo))) {
            guardarError(true);

            setTimeout(() => {
                guardarError(false);
            }, 3000);
            return;
        }
        // eliminar el error previo
        guardarError(false);

        // Habilitar Spinner
        guardarCargando(true);

        setTimeout(() => {
            // Realizar la cotizacion
            const total = calcularTotal(cantidad, plazo);

            //Una vez calculado
            guardarTotal(total);

            //Deshabilitar Spinner
            guardarCargando(false);
        }, 3000);
        
        
    }
    return ( 
    <Fragment>
        <form onSubmit={calcularPrestamo}>
            <div className='row'>
                <div>
                    <label>Cantidad Prestamos</label>
                    <input
                     className='u-full-width' 
                     type='number'
                     min='0' 
                     placeholder='Ejemplo: 3000'
                    onChange={(e) => {
                        guardarCantidad( parseInt(e.target.value));
                        guardarTotal(0);
                    }}
                    />
                </div>

                <div>
                    <label>Plazo para pagar</label>
                    <select 
                    className='u-full-width'
                    onChange={ e => guardarPlazo( parseInt(e.target.value)) }
                    >
                        <option value=''>Seleccionar</option>
                        <option value='3'>3 Meses</option>
                        <option value='6'>6 Meses</option>
                        <option value='12'>12 Meses</option>
                        <option value='24'>24 Meses</option>
                    </select>
                </div>

                <div>
                    <input className='button-prymary u-full-width' id='calcular' type='submit' value='Calcular'></input>
                </div>
            </div>
        </form>

        { (error) ? <p className='error'>Todos los campos son obligatorios</p> : null}
        
    </Fragment>
    );
}
 
export default Formulario;