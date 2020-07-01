import React from "react";
import FichaDetalles from "./FichaDetalles";
import FichaListaUsuarios from "./FichaListaUsuarios";

class FichaEntrenamiento extends React.Component {
  render() {
    const { fechaInicio, fechaFin, actividad, entrenador } = this.props.ficha;

    const detalles = {
      fechaInicio,
      fechaFin,
      actividad,
      entrenador,
    };

    const usuarios = this.props.ficha.sesion_usuarios;

    return (
      <div className="ficha-entrenamiento">
        <h2 className="text-center">Ficha de entrenamiento</h2>
        <FichaDetalles detalles={detalles} />
        <FichaListaUsuarios usuarios={usuarios} />
      </div>
    );
  }
}

export default FichaEntrenamiento;
