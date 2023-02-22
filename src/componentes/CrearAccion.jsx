import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Accion({ accion }) {
  const name = accion.name;
  const icon = accion.icon;
  console.log(name);
  console.log(icon);
  return (
    <div className="button">
      <li className="bg-gray-800 p-4 rounded-md">
        <Link to={`/productos`} className="btn btn-outline-primary">
          {" "}
          <i>
            <div className="icon">{icon}</div>
          </i>
        </Link>
        <p> {name}</p>
      </li>
    </div>
  );
}

export default Accion;
