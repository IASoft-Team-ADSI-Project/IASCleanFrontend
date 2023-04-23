import "./App.css";
import CompBarraTitulo from "./components/barrraTitulo";
import Footer from "./components/Footer";
import CompRutas from "./configuracion/Rutas";
import { BrowserRouter as Router } from "react-router-dom";
import RolInterno from "./Roles/RolInterno";


function App() {
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <div>
          <CompBarraTitulo />
          <RolInterno/>
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
