import "./App.css";
import CompSeccionDerecha from "./componentes/seccionDerecha";
import CompBarraTitulo from "./componentes/barrraTitulo";
import CompRutas from "./configuracion/Rutas";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <CompBarraTitulo />
        <div className={"container"}>
          <div className={"row row-cols-2 gx-5"}>
            <div className="col">
              <CompRutas/>
            </div>
            <div className="col">
              <CompSeccionDerecha />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
