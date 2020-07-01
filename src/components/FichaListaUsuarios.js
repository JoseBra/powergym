import React from "react";

class FichaListaUsuarios extends React.Component {
  renderList() {
    const renderList = this.props.usuarios.map((usuariodetalle) => {
      return (
        <tr key={usuariodetalle.id}>
          <td className="align-middle">{usuariodetalle.usuario.nombre}</td>
          <td className="align-middle">
            {usuariodetalle.confirmado ? "Confirmada" : "No confirmada"}
          </td>
          <td>
            <div className="d-flex justify-content-around">
              <button type="button" className="btn btn-success">
                Confirmar
              </button>
              <button type="button" className="btn btn-danger">
                Dar de baja
              </button>
            </div>
          </td>
        </tr>
      );
    });

    return renderList;
  }

  render() {
    console.log(this.props.usuarios);
    return (
      <div className="ficha-lista-usuarios">
        <table className="table table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Asistencia</th>
              <th scope="col">Confirmar / Dar de Baja</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}

export default FichaListaUsuarios;
