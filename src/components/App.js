import React from "react";
import data from "../data/data.json";
import FichaEntrenamiento from "./FichaEntrenamiento";

class App extends React.Component {
  // Initialize state
  state = {
    fichaentrenamiento: null,
    fichaentrenamientoAPI: null,
  };

  componentDidMount() {
    // Update state about the file data.json
    this.setState({ fichaentrenamiento: data });
  }

  render() {
    return (
      <div className="app container">
        <FichaEntrenamiento ficha={this.state.fichaentrenamiento} />
      </div>
    );
  }
}

export default App;
