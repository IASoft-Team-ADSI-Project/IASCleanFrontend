import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import CompSeccionDerecha from "../componentes/seccionDerecha";

const CompTrabajador = () => {
  return (
    <div className={"container"}>
      <div className={"row row-cols-2 gx-5"}>
        <div className="col">
          <div className="container">
            <h2 className="h2Usuario">TRABAJADOR</h2>
            <div className="containerCuadro">
              <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                <div className="col">
                  <div className="p-3 bg-transparentparent">
                    <Link to={`/`} className="btn btn-outline-primary">
                      {" "}
                      <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                    </Link>
                    <br />
                    Productos
                  </div>
                </div>

                <div className="col">
                  <div className="p-3 bg-transparent">
                    <Link to={`/`} className="btn btn-outline-primary">
                      {" "}
                      <i class="fa-solid fa-user"></i>
                    </Link>
                    <br />
                    Clientes
                  </div>
                </div>

                <div className="col">
                  <div className="p-3 bg-transparent">
                    <Link to={`/`} className="btn btn-outline-primary">
                      {" "}
                      <i class="fa-solid fa-chart-simple"></i>
                    </Link>
                    <br />
                    Graficos de ventas
                  </div>
                </div>

                <div className="col">
                  <div className="p-3 bg-transparent">
                    <Link to={`/`} className="btn btn-outline-primary">
                      {" "}
                      <i class="fa-solid fa-money-bill-trend-up"></i>
                    </Link>
                    <br />
                    Ingresos
                  </div>
                </div>

                <div className="col">
                  <div className="p-3 bg-transparent">
                    <Link to={`/`} className="btn btn-outline-primary">
                      {" "}
                      <i class="fa-sharp fa-solid fa-minus"></i>
                    </Link>
                    <br />
                    Gastos
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

export default CompTrabajador;
