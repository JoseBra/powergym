import React from "react";

class FichaEntrenamiento extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="ficha-entrenamiento">
        <h2 className="text-center">Ficha de entrenamiento</h2>
        <div className="container-ficha-detalles"></div>
      </div>
    );
  }
}

export default FichaEntrenamiento;
