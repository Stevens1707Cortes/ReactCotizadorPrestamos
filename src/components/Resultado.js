import React, { Fragment } from 'react'

const Resultado = (props) => {
    const {total, plazo, cantidad} = props;
    return (
        <Fragment>
            <h2>Resumen</h2>
            <p>Cantidad solicitada: <b>{cantidad} $</b></p>
            <p>A un plazo de: <b>{plazo} Meses</b></p>
            <p>Su pago mensual es de: <b>{(total/plazo).toFixed(2)} $</b></p>
            <p>Total a pagar : <b>{total.toFixed(2)} $</b></p>
        </Fragment>
        
    );
}

export default Resultado;