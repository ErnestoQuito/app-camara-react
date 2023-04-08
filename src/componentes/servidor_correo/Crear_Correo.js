import { Link } from "react-router-dom";
import "../../estilos/Crear_Correo.css";

export function CrearCorreo() {
  return (
    <div className="contenedor-formulario">
      <form className="formulario" action="" method="post">
        <div id="titulo-formulario"><h2>Formulario de creacion de correo</h2></div>
        <div className="contenedor-items">
          <div>
            <h3>Datos de Contacto</h3>
          </div>
          <div className="items">
            <label>Nombres: </label>
            <input id="nombres" type="text" required/>
          </div>
          <div className="items">
            <label>Apellidos: </label>
            <input id="apellidos" type="text" required/>
          </div>
          <div className="items">
            <label>Telefono: </label>
            <input id="telefono" type="text" required/>
          </div>
        </div>
        <div className="contenedor-items">
          <div><h3>Configuracion de correo</h3></div>
          <div className="contenedor-servidor">
            <div className="servidor">
              <div className="items">
                <label>IMAP: </label>
                <input id="imap" type="text" />
              </div>
              <div className="items">
                <label>Puerto: </label>
                <input id="puerto" type="number" />
              </div>
              <div className="items">
                <label>SSL: </label>
                <select id="ssl">
                  <option>Sí</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className="credenciales">
              <div className="items">
                <label>Usuario: </label>
                <input id="usuario" type="text" />
              </div>
              <div className="items">
                <label>Contraseña: </label>
                <input id="pass" type="password" />
              </div>
            </div>
          </div>
          <div className="items">
            <label>De: </label>
            <input id="de" type="text" required/>
          </div>
          <div className="items">
            <label>Para: </label>
            <input id="para" type="text" required/>
          </div>
          <div className="items">
            <label>Cc: </label>
            <input id="cc" type="text" />
          </div>
          <div className="items">
            <label>Bcc: </label>
            <input id="bcc" type="text" />
          </div>
          <div className="items">
            <label>Asunto: </label>
            <input id="asunto" type="text" required/>
          </div>
          <div>
            <label>Mensaje: </label>
            <div>
              <textarea id="mensaje" placeholder="Ingrese un mensaje..." required/>
            </div>
          </div>
        </div>
        <div className="acciones-formulario">
          <button id="guardar" type="submit">
            Guardar
          </button>
          <Link to="/configuracion">
            <button id="salir" type="button">
              Salir
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}