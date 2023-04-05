import { Link } from 'react-router-dom';

export default function Menu() {
    return (
      <nav className='contenedor-menu'>
        <ul className='contenedor-elementos'>
          <li className='elemento-menu'>
            <Link to='/'>INICIO</Link>
          </li>
          <li className='elemento-menu'>
            <Link to='/configuracion/listar'>CONFIGURACION SERVIDOR DE CORREO</Link>
          </li>
        </ul>
      </nav>
    )
}