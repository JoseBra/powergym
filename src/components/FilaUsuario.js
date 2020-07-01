import React from "react";

const FilaUsuario = (props) => {
  return (
    <tr>
      <td className="align-middle">{props.nombre}</td>
      <td className="align-middle">
        {props.asistencia ? "Confirmado" : "No Confirmado"}
      </td>
      <td>
        <div className="d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-success"
            onClick={props.onButtonClickConfirm}
          >
            Confirmar
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={props.onButtonClickCancellation}
          >
            Dar de baja
          </button>
        </div>
      </td>
    </tr>
  );
};

export default FilaUsuario;
