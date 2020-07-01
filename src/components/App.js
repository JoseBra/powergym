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

  renderContent() {
    if (!this.state.fichaentrenamiento) {
      return <p>Loading...</p>;
    }
    return <FichaEntrenamiento ficha={this.state.fichaentrenamiento} />;
  }

  render() {
    return <div className="app container">{this.renderContent()}</div>;
  }
}

export default App;
