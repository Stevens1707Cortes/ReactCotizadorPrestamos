import React from 'react';

// Un componente siempre es una funcion
// function Header(props) {
//     // Entre la llave y el return se puede colocar codigo estandar de JS

//     // Siempre debe retornar algo, este return es lo que se va a ver en pantalla
//     return (
//         <div className="Header">
//             <h1>{props.titulo}</h1>
//             <p>{props.descripcion}</p>
//         </div>
//     )
// }

// Con function expression

const Header = ({titulo, descripcion}) => (
    <div className="Header">
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
    </div>
);
 
export default Header;


