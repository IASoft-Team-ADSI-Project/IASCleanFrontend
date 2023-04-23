import React from "react";
import "../App.css";
import {
  administrador,
  trabajador,
  Vaciar
//  proveedor,
//  cliente,
} from "./accionesPorRol";

import { useNavigate} from "react-router-dom";

import Accion from "./CrearAccion";
import useAuth from "../hooks/useAuth";
//import { useState } from "react";

import useLogout from "../hooks/useLogout";

let accionesRolInterno = [];
//let accionesRolExterno = [];


const RolInterno = () => {
  const {auth} = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();
  let roll = auth.rol
  let showButton = false;
  if (roll === "Administrador") {
    accionesRolInterno = administrador();
    showButton = true
  } else if (roll === "Trabajador") {
    accionesRolInterno = trabajador();
    showButton = true
  //} else if (roll === "proveedor") {
  //  accionesRolExterno = proveedor();
  //} else {
  //  accionesRolExterno = cliente();
  
}

const signOut = async () => {
  await logout();
  navigate('/');
  accionesRolInterno = Vaciar();
  showButton = false
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
        {showButton && (
        <button onClick={signOut} className="SignInBtn">Sign Out</button>
        )}      
      </nav>
    </div>
  );
};

export default RolInterno;
