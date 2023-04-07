import Icon from "react-crud-icons";
import { Link } from "react-router-dom";
import "../../estilos/List_Correo.css";
import { TablaListar } from "../../utilitarios/Tablas";


export function ListCorreo () {
  const listMails = [
    {id: 0, nombre: 'el primer servidor', servidor: '10.10.10.1.'},
    {id: 1, nombre: 'el segundo servidor', servidor: '10.20.10.1.'},
    {id: 2, nombre: 'el tercer servidor', servidor: '192.168.0.1'}
  ]
  return (
    <div>
      <div className="contenedor-titulo">
        <h1>
          Lista de Servidores de Correo
        </h1>
      </div>
      <div className="contenedor-acciones">
        <Link className="button-crear" to="/configuracion/crear">
          Crear
          <div className="button-icon">
            <Icon
              name="add"
              size="small"
              theme="light"
            />
          </div>
        </Link>
      </div>
      <div>
        <TablaListar rows={listMails}/>
      </div>
    </div>
  )
}