import '../../estilos/Camara.css';
import { useState } from 'react';

export default function Camara() {
  const [estaDetectado, setEstaDetectado] = useState(false);
  const [msgDetectado, setMsgDetectado] = useState('SIN ALERTA');
  const [autoapagadoActivo, setAutoapagadoActivo] = useState(true);
  const [porCorreoActivo, setPorCorreoActivo] = useState(true);
  const establecerAutoapagado = () => {
    setAutoapagadoActivo(!autoapagadoActivo);
  };
  const establecerPorCorreo = () => {
    setPorCorreoActivo(!porCorreoActivo);
  };
  const establecerEstaDetectado = () => { 
    setEstaDetectado(!estaDetectado);
    setMsgDetectado(estaDetectado ? 'SIN ALERTA' : 'CON ALERTA');
  }

  return (
    <div id='app-camara'>
      <div id='contenedor-camara'>
        <div id='visualizacion'></div>
        <div id='acciones'>
          <button id='iniciar'>INICIAR</button>
          <button id='detener'>DETENER</button>
          <button id='mute'>Silenciar</button>
          <button id='esta_detectado' className={estaDetectado ? 'detectado' : 'no-detectado'}>{msgDetectado}</button>
          <button id='iniciar' onClick={establecerEstaDetectado}>Test Activar Manual</button>
        </div>
      </div>
      <div id='contenedor-ajustes'>
        <div id='temporizador'>
          <h4 className='titulo'>Temporizador</h4>
          <div id='autoapagado'>
            <div>
              <input type='checkbox' onChange={establecerAutoapagado}/><label> Auto-apagado</label>
            </div>
            <div>
              <span>Tiempo: </span>
              <input className='checkbox' type='number' min='1' max='7' disabled={autoapagadoActivo}/><span> : </span>
              <input className='checkbox' type='number' min='0' max='59' disabled={autoapagadoActivo}/><span> : </span>
              <input className='checkbox' type='number' min='0' max='59' disabled={autoapagadoActivo}/><span></span>
            </div>
          </div>
        </div>
        <div id='notificaciones'>
          <h4 className='titulo'>Notificación</h4>
          <div id='correo' style={{marginBottom: '5px'}}>
            <div style={{marginBottom: '5px'}}><input type='checkbox' onChange={establecerPorCorreo}/><label> Por Correo</label></div>
            <select style={{marginLeft: '15px'}} disabled={porCorreoActivo}>
              <option value='imagen' defaultValue='imagen'>Imagen</option>
              <option value='video'>Video</option>
            </select>
          </div>
          <div id='popup'>
          <div><input type='checkbox'/><label> Alerta emergente (popup)</label></div>
          </div>
        </div>
        {/* <div>Guía camara web: <a href='https://www.digitalocean.com/community/tutorials/front-and-rear-camera-access-with-javascripts-getusermedia-es' target='_blank' rel='noreferrer'>acceder a las cámaras</a></div> */}
      </div>
    </div>
  );
}
