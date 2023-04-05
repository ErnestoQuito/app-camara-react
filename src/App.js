import { Routes, Route } from 'react-router-dom';
import './estilos/Cabecera.css';
import Menu from './componentes/cabecera/menu';
import Camara from './componentes/camara/camara';
import { ListCorreo } from './componentes/servidor_correo/list_correo';

function App() {
  return (
    <div className="contenedor-app">
      <Menu/>
      <Routes>
        <Route path='/' element={ <Camara/> }></Route>
        <Route path='/configuracion' element={ <ListCorreo/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
