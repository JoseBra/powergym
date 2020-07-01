import React from "react";

const FichaDetalles = (props) => {
  const detalles = props.detalles;

  const fechaInicio = `${detalles.fechaInicio.slice(
    0,
    10
  )} ${detalles.fechaInicio.slice(11, 16)}`;

  const fechaFin = `${detalles.fechaFin.slice(0, 10)} ${detalles.fechaFin.slice(
    11,
    16
  )}`;

  return (
    <div className="ficha-detalles">
      <p>
        <i className="fa fa-clock-o" aria-hidden="true"></i>Fecha de inicio:{" "}
        {fechaInicio}
        <br />
        <i className="fa fa-clock-o" aria-hidden="true"></i>Fecha de fin:{" "}
        {fechaFin}
        <br />
        <i
          className="fa fa-user-circle-o"
          aria-hidden="true"
        ></i>Entrenador: {detalles.entrenador.nombre}
        <br />
        <i className="fa fa-check" aria-hidden="true"></i>Actividad:{" "}
        {detalles.actividad}
      </p>
    </div>
  );
};

export default FichaDetalles;
