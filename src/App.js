import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Inicio from "./screens/Inicio";
import Matricula from "./screens/Matricula";
import CursoDisponibles from "./screens/CursosDisponibles";
import Configuracion from "./screens/Configuracion";
import Horarios from "./screens/Horarios"
import Test from "./screens/prueba";
import "./style.css";

function App() {
  return (
    <div className="container">
          <Router>
      <Route path="/" exact component={Inicio}/>
      <Route path="/Inicio/" exact component={Inicio} />
      <Route path="/Matricula/" exact component={Matricula} />
      <Route path="/Horarios" exact component={Horarios}/>
      <Route path="/CursosDisponibles/" exact component={CursoDisponibles} />
      <Route path="/Configuracion/" exact component={Configuracion} />
      <Route path="/test/" exact component={Test} />
    </Router>

    </div>
  );
}

export default App;
