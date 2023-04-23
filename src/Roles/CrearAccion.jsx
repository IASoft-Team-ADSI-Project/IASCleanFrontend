import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Accion({ accion }) {
  const name = accion.name;
  const icon = accion.icon;
  const link = accion.link;

/*  const  = "";
  if (name == "Productos") {
    linkbtn = `/productos`;
  } else if (name == "Clientes") {
    linkbtn = `/clientes`;
  }
*/
  return (
    <div className="button">
      <li className="bg-gray-800 p-4 rounded-md">
        <Link to={link} className="btn btn-outline-primary">
          {" "}
          <i>
            <div className={icon}></div>
          </i>
        </Link>
        <p> {name}</p>
      </li>
      
    </div>
  );
}

/*
function Accion({ accion }) {
  const name = accion.name;
  const icon = accion.icon;
  console.log(name);
  console.log(icon);

  switch ({name}) {
    case "Productos":
      <div className="button">
      <li className="bg-gray-800 p-4 rounded-md">
        <Link to={`/productos`} className="btn btn-outline-primary">
          {" "}
          <i>
            <div className={icon}></div>
          </i>
        </Link>
        <p> {name}</p>
      </li>
    </div>
    case "Clientes":
      <div className="button">
      <li className="bg-gray-800 p-4 rounded-md">
        <Link to={`/clientes`} className="btn btn-outline-primary">
          {" "}
          <i>
            <div className={icon}></div>
          </i>
        </Link>
        <p> {name}</p>
      </li>
    </div>
};
*/
export default Accion;
