import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Accion({ accion }) {
  return (
    <li className="bg-gray-800 p-4 rounded-md">
      <Link to={`/productos`} className="btn btn-outline-primary">
        {" "}
        <i class="fa-sharp fa-solid fa-cart-shopping"></i>
      </Link>
      <br />
      <p>{accion}</p>
    </li>
  );
}

export default Accion;
