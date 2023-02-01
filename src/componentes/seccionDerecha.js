import React from "react";
import limpiezaLogo from "../imagenes/logo.jpg";
import "../App.css";

const CompSeccionDerecha = () => {
  return (
    <div className="divLogo">
        <img src={limpiezaLogo} className="imgLogo" alt="logo" />
        <div className = "espacio"></div>
      <h2 className = "h2Img">
        INGENIERIA EN ASEO & SUMINISTRO<br></br> IAS S.A.S
      </h2>
      <h3>LLEGANDO A CADA LUGAR</h3>
    </div>
  );
};

export default CompSeccionDerecha;
