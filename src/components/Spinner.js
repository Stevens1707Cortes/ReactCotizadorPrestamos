import React from 'react'
import './Spinner.css'; // Se importa el estilo

const Spinner = () => {
    return ( 
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
     );
}
 
export default Spinner;