import "../estilos/Tabla.css";

export function TablaListar() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>nombre</th>
            <th>servidor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Servidor de correo primario</td>
            <td>10.10.10.10</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}