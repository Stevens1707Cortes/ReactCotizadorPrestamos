import React from 'react';

// Un componente siempre es una funcion
function Header() {
    // Siempre debe retornar algo, este return es lo que se va a ver en pantalla
    return (
        <div className="App">
            <div id="header">
                <h1>Cotizador de Prestamos</h1>
            </div>
        </div>
        
    )
}

export default Header;

