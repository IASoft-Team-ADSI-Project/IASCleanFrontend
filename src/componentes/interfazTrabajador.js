import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const CompInterfazTrabajador = () => {
  return (
    <div className="containerTrabajador">
      <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3"> 
        <div className="col">
          <div className="p-3 bg-transparentparent">
            <Link to = {`/`}  className="btn btn-outline-primary">
              {" "}
              <i className="fa-solid fa-cart-plus"></i>
            </Link>
            <br />
            Agregar Producto
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-transparent">
            <Link to = {`/`} className="btn btn-outline-primary">
              {" "}
              <i class="fa-solid fa-pen"></i>
            </Link>
            <br />
            Modificar Producto
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-transparent">
            <Link to = {`/`} className="btn btn-outline-primary">
              {" "}
              <i class="fa-solid fa-money-bill-trend-up"></i>
            </Link>
            <br />
            Ingresos
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-transparent">
            <Link to = {`/`} className="btn btn-outline-primary">
              {" "}
              <i class="fa-solid fa-user-plus"></i>
            </Link>
            <br />
            Agregar Cliente
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-transparent">
            <Link to = {`/`} className="btn btn-outline-primary">
              {" "}
              <i class="fa-solid fa-user-pen"></i>
            </Link>
            <br />
            Modificar Cliente
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-transparent">
            <Link to = {`/`} className="btn btn-outline-primary">
              {" "}
              <i class="fa-sharp fa-solid fa-minus"></i>
            </Link>
            <br />
            Gastos
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-transparent"></div>
        </div>
        <div className="col">
          <div className="p-3 bg-transparent">
            <Link to = {`/`} className="btn btn-outline-primary">
              {" "}
              <i class="fa-solid fa-chart-simple"></i>
            </Link>
            <br />
            Graficos de ventas
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompInterfazTrabajador;
