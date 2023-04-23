import React from "react";
import "../App.css";
import limpiezaLogo from "../imagenes/logo.jpg";

const CompBarraTitulo = () => {
  return (
    <div>
      
      <h1><div className="divLogo"> <img src={limpiezaLogo} className="imgLogo" alt="logo" /></div> INGENIERIA EN ASEO & SUMINISTROS <br/>IAS S.A.S</h1>
      <h3 className = "h2Img">LLEGANDO A CADA LUGAR</h3>
    </div>
  );
};
export default CompBarraTitulo;

