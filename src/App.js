import "./App.css";
import CompBarraTitulo from "./componentes/barrraTitulo";
import Footer from "./componentes/Footer";
import CompRutas from "./configuracion/Rutas";
import { BrowserRouter as Router } from "react-router-dom";
import CompSeccionDerecha from "./componentes/seccionDerecha";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <div >
          <CompSeccionDerecha />
          <CompBarraTitulo />
        </div>
        <div className={"container"}>
          <div className={"yd"}>
            <div className="col">
              <CompRutas />
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
