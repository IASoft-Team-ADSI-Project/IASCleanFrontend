import React from "react";
import "../App.css";
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
  } else if (roll == "TRABAJADOR") {
    accionesRolInterno = trabajador();
  } else if (roll == "proveedor") {
    accionesRolExterno = proveedor();
  } else {
    accionesRolExterno = cliente();
  }

  return (
    <div className={"container"}>
      <h2 className="rollTitle">{roll}</h2>
      <nav style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ listStyle: "none", display: "flex" }}>
          {accionesRolInterno.map((accion) => {
            return <Accion accion={accion}> </Accion>;
          })}
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default RolInterno;
