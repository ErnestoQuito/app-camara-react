import "../estilos/Tabla.css";
import Icon from "react-crud-icons";

export function TablaListar(params) {
  const { rows } = params; 
  const listRows = rows.map(row =>
    <tr key={row.id}>
      <td className="celdas">{row.nombre}</td>
      <td className="celdas">{row.servidor}</td>
      <td className="celdas">
        <span className="span-icon">
          <Icon
            name = "show"
            theme = "light"
            size = "small"
          />
        </span>
        <span className="span-icon">
          <Icon
            name = "edit"
            theme = "light"
            size = "small"
          />
        </span>
        <span className="span-icon">
          <Icon
            name = "delete"
            theme = "light"
            size = "small"
          />
        </span>
      </td>
    </tr>
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>nombre</th>
            <th>servidor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listRows}
        </tbody>
      </table>
    </div>
  )
}