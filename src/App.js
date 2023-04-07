import { Routes, Route } from 'react-router-dom';
import './estilos/Cabecera.css';
import Menu from './componentes/cabecera/Menu';
import Camara from './componentes/camara/Camara';
import { ListCorreo } from './componentes/servidor_correo/List_correo';
import { CrearCorreo } from './componentes/servidor_correo/Crear_Correo';

function App() {
  return (
    <div className="contenedor-app">
      <Menu/>
      <Routes>
        <Route path='/' element={ <Camara/> }></Route>
        <Route path='/configuracion' element={ <ListCorreo/> }></Route>
        <Route path='/configuracion/crear' element={ <CrearCorreo/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
