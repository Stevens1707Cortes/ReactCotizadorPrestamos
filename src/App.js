import './App.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import { Fragment, useState } from 'react';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {

  // Definir un State. Se define en el componente principal para que pueda fluir a los demas componentes

  const [cantidad, guardarCantidad] = useState(0); // El useState nos retorna dos valores
  const [plazo, guardarPlazo] = useState(''); // El useState nos retorna dos valores
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  // Carga condicional de componentes en React
  let componente;

  if (cargando === true) {
    componente = <Spinner></Spinner>
  }
  else if (total === 0 || isNaN(cantidad) || isNaN(plazo)) {
    componente = <div className='mensaje'><Mensaje></Mensaje></div>;
  } else {
    componente = <div className='resultado'><Resultado 
    total={total}
    plazo={plazo}
    cantidad={cantidad}
    /></div>; // El total es enviado como un prop a Resultado
  }


  return (
    // Fragment es un div que tiene React, pero que no afecta al HTML
    <Fragment>
      {/* Un componente es reutilizable */}
      <Header
        titulo="Cotizador de Prestamos"
        descripcion="Utiliza el formulario y obten una cotizacion"
      /> 

      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        {componente}
        {/* {(total > 0) ? <div className='resultado'></div> : null} */}
      </div>

    </Fragment>
  );
}

export default App;
