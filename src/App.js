import "./App.css";
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
          <div className={"yd"}>
            <div className="col">
              <CompRutas/>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
