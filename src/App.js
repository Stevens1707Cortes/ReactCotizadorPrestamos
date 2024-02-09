import './App.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import { Fragment } from 'react';

function App() {
  return (
    // Fragment es un div que tiene React, pero que no afecta al HTML
    <Fragment>
      {/* Un componente es reutilizable */}
      <Header
        titulo="Cotizador de Prestamos"
        descripcion="Utiliza el formulario y obten una cotizacion"
      /> 

      <div className="container">
        <Formulario/>
      </div>

    </Fragment>
  );
}

export default App;
