import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/materiaPrima/";

const CompMostrarMateriaPrima = () => {
  const [materiaPrima, setMateriaPrima] = useState([]);
  useEffect(() => {
    getMateriaPrima();
  }, []);

  // creamos la funcion para mostrar los materiaPrima

  const getMateriaPrima = async () => {
    const res = await axios.get(URL);
    setMateriaPrima(res.data);
  };

  // funcion para eliminar materiaPrima
  const eliminarMateriaPrima = async (cod_matPrima) => {
    await axios.delete(`${URL}${cod_matPrima}`);
    getMateriaPrima();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/materiaPrima/agregar" className="btn btn-primary mt-2 mb-2">
            {" "}
            <i className="fa-sharp fa-solid fa-user-plus"> </i>
          </Link>
          <table className="table">
            <thead className="tableThedBg">
              <tr>
                <th> Código </th>
                <th> Empresa </th>
                <th> Nombre </th>
                <th> Descripcion </th>
                <th> Tipo </th>
                <th> Unidad de medida</th>
                <th> Presentacion </th>
                <th> Precio por Unidad </th>
                <th> Precio Presentacion </th>
                <th> Cantidad </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {materiaPrima.map((materiaPrima, index) => (
                <tr key={index}>
                  <td> {materiaPrima.cod_matPrima}</td>
                  <td> {materiaPrima.empresa_ias_nit_empr}</td>
                  <td> {materiaPrima.nombre_matPrima}</td>
                  <td> {materiaPrima.descripcion_matPrima}</td>
                  <td> {materiaPrima.tipo_matPrima}</td>
                  <td> {materiaPrima.unidad_medida_matPrima}</td>
                  <td> {materiaPrima.presentacion_matPrima}</td>
                  <td> {materiaPrima.precio_uni_medida_matPrima}</td>
                  <td> {materiaPrima.precio_presentacion_matPrima}</td>
                  <td> {materiaPrima.cantidad_matPrima}</td>
                  <td>
                    <Link
                      to={`/materiaPrima/editar/${materiaPrima.cod_matPrima}`}
                      className="btn btn-info"
                    >
                      {" "}
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarMateriaPrima(materiaPrima.cod_matPrima)}
                      className="btn btn-danger"
                    >
                      {" "}
                      <i className="fa-sharp fa-solid fa-trash"> </i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CompMostrarMateriaPrima;