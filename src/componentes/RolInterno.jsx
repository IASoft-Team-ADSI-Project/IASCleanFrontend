import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import CompSeccionDerecha from "../componentes/seccionDerecha";
import {
  administrador,
  trabajador,
  proveedor,
  cliente,
} from "./accionesPorRol";
import Accion from "./CrearAccion";

let accionesRolInterno = [];
let accionesRolExterno = [];

const RolInterno = ({ roll }) => {
  if (roll == "ADMINISTRADOR") {
    accionesRolInterno = administrador();
    console.log(accionesRolInterno);
  } else if (roll == "TRABAJADOR") {
    accionesRolInterno = trabajador();
  } else if (roll == "proveedor") {
    accionesRolExterno = proveedor();
  } else {
    accionesRolExterno = cliente();
  }

  return (
    <div className={"container"}>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{listStyle: 'none',display: 'flex'}}>
          {accionesRolInterno.map((accion) => (
            <Accion accion={accion} />
          ))}
        </ul>
      </nav>
      <hr />

      <div className={"row row-cols-2 gx-5"}>
        <div className="col">
          <div className="container">
            <h2 className="h2Usuario">{roll}</h2>
            <div className="containerCuadro">
              <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                <div className="col">
                  <div className="p-3 bg-transparentparent">
                    <Link to={`/productos`} className="btn btn-outline-primary">
                      {" "}
                      <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                    </Link>
                    <br />
                    Productos
                  </div>
                </div>

                <div className="col">
                  <div className="p-3 bg-transparent">
                    <Link to={`/clientes`} className="btn btn-outline-primary">
                      {" "}
                      <i class="fa-solid fa-user"></i>
                    </Link>
                    <br />
                    Clientes
                  </div>
                </div>

                <div className="col">
                  <div className="p-3 bg-transparent">
                    <Link
                      to={`/insumosYMateriaPrima`}
                      className="btn btn-outline-primary"
                    >
                      {" "}
                      <i class="fa-solid fa-chart-simple"></i>
                    </Link>
                    <br />
                    Insumos y Materia Prima
                  </div>
                </div>

                <div className="col">
                  <div className="p-3 bg-transparent">
                    <Link to={`/`} className="btn btn-outline-primary">
                      {" "}
                      <i class="fa-solid fa-money-bill-trend-up"></i>
                    </Link>
                    <br />
                    Ventas
                  </div>
                </div>

                <div className="col">
                  <div className="p-3 bg-transparent">
                    <Link to={`/`} className="btn btn-outline-primary">
                      {" "}
                      <i class="fa-sharp fa-solid fa-minus"></i>
                    </Link>
                    <br />
                    Pending
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <CompSeccionDerecha />
        </div>
      </div>
    </div>
  );
};

export default RolInterno;
