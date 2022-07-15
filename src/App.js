import './estilos/App.css';
import Menu from './componentes/cabecera/menu';
import Camara from './componentes/camara/camara';

function App() {
  return (
    <div className="contenedor-app">
      <Menu/>
      <Camara/>
    </div>
  );
}

export default App;
