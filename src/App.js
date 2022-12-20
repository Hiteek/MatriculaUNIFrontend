import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Inicio from "./screens/Inicio";
import Matricula from "./screens/Matricula";
import CursosDisponibles from "./screens/CursosDisponibles";
import Reglamento from "./screens/Reglamento";
import Configuracion from "./screens/Configuracion";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Inicio} />
      <Route path="/Inicio/" exact component={Inicio} />
      <Route path="/Matricula/" exact component={Matricula} />
      <Route path="/CursosDisponibles/" exact component={CursosDisponibles} />
      <Route path="/Reglamento/" exact component={Reglamento} />
      <Route path="/Configuracion/" exact component={Configuracion} />
    </Router>
  );
}

export default App;
