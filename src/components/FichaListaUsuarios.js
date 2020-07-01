import React from "react";
import FilaUsuario from "./FilaUsuario";

class FichaListaUsuarios extends React.Component {
  state = {
    confirm: "",
  };

  onButtonClickConfirm() {
    this.setState({ confirm: "Confirmada!" });
  }

  onButtonClickCancellation() {
    this.setState({ confirm: "No Confirmada" });
  }

  renderList() {
    const renderList = this.props.usuarios.map((usuariodetalle) => {
      return (
        <FilaUsuario
          key={usuariodetalle.id}
          nombre={usuariodetalle.usuario.nombre}
          asistencia={usuariodetalle.confirmado}
          onButtonClickConfirm={() => this.onButtonClickConfirm()}
          onButtonClickCancellation={() => this.onButtonClickCancellation()}
        />
      );
    });

    return renderList;
  }

  render() {
    return (
      <div className="ficha-lista-usuarios">
        <table className="table table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th>Nombre</th>
              <th>Asistencia</th>
              <th>Confirmar / Dar de Baja</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}

export default FichaListaUsuarios;
