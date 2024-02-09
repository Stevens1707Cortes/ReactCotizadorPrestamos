import React from 'react'

const Formulario = () => {
    return ( 
        <form>
            <div className='row'>
                <div>
                    <label>Cantidad Prestamos</label>
                    <input className='u-full-width' type='number' placeholder='Ejemplo: 3000'></input>
                </div>

                <div>
                    <label>Plazo para pagar</label>
                    <select className='u-full-width'>
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
     );
}
 
export default Formulario;