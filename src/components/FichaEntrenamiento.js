import React from "react";
import FichaDetalles from "./FichaDetalles";

class FichaEntrenamiento extends React.Component {
  render() {
    const { fechaInicio, fechaFin, actividad, entrenador } = this.props.ficha;

    const detalles = {
      fechaInicio,
      fechaFin,
      actividad,
      entrenador,
    };

    console.log(detalles);

    return (
      <div className="ficha-entrenamiento">
        <h2 className="text-center">Ficha de entrenamiento</h2>
        <FichaDetalles detalles={detalles} />
      </div>
    );
  }
}

export default FichaEntrenamiento;
