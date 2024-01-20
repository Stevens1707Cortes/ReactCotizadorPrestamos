import './App.css';
import Header from './components/Header';
import { Fragment } from 'react';

function App() {
  return (
    // Fragment es un div que tiene React, pero que no afecta al HTML
    <Fragment>
      {/* Un componente es reutilizable */}
      <Header/> 
      
    </Fragment>
  );
}

export default App;
