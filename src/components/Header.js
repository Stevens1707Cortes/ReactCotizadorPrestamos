import React from 'react';

// Un componente siempre es una funcion
function Header() {
    // Siempre debe retornar algo, este return es lo que se va a ver en pantalla
    return (
        <div className="Header">
            <h1>Cotizador de Prestamos</h1>
        </div>
    )
}

export default Header;

