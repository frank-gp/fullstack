// 2 etapas del ciclo de vida - componentes de clase

import React from "react";

const user = "Daiana";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      session: false,
      info: "No se ha cargado la información",
    };

    console.log("1 Ejecutando el constructor");
  }

  componentDidMount() {
    console.log("4 Ejecutando el componentDidMount");

    setTimeout(() => {
      this.setState({
        session: true,
        info: "Bienvenido " + user,
      });
    }, 3000);
  }

  componentDidUpdate() {
    console.log("5 Ejecutando el componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("6 Ejecutando el componentWillUnmount");
  }

  render() {
    console.log("2 Ejecutando el render");
    console.log(this.state.info) // 3
    return (
      <div>
        {
          this.state.session? (
            <h2>Estas conectado: {user}</h2>
          ): (
            <h2>No estas conectado 🦖🦕</h2>
          )
        }
      </div>
    );
  }
}

export default App;
