import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/clientes/";

const CompMostrarClientes = () => {
  const [clientes, setCliente] = useState([]);
  useEffect(() => {
    getClientes();
  }, []);

  // creamos la funcion para mostrar los clientes

  const getClientes = async () => {
    const res = await axios.get(URL);
    setCliente(res.data);
  };

  // funcion para eliminar clientes
  const eliminarClientes = async (cod_clnt) => {
    await axios.delete(`${URL}${cod_clnt}`);
    getClientes();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/clientes/agregar" className="btn btn-primary mt-2 mb-2">
            {" "}
            <i className="fa-sharp fa-solid fa-user-plus"> </i>
          </Link>
          <table className="table">
            <thead className="tableThedBg">
              <tr>
                <th> Código </th>
                <th> Nombre </th>
                <th> Direccion </th>
                <th> Telefono </th>
                <th> Mail </th>
                <th> Tipo </th>
                <th> Historico de ventas </th>
                <th> Identificacion </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index}>
                  <td> {cliente.cod_clnt}</td>
                  <td> {cliente.nombre_clnt}</td>
                  <td> {cliente.direccion_clnt}</td>
                  <td> {cliente.telefono_clnt}</td>
                  <td> {cliente.mail_clnt}</td>
                  <td> {cliente.tipo_clnt}</td>
                  <td> {cliente.historicos_ventas_clnt}</td>
                  <td> {cliente.id_nit_clnt}</td>
                  <td>
                    <Link
                      to={`/clientes/editar/${cliente.cod_clnt}`}
                      className="btn btn-info"
                    >
                      {" "}
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarClientes(cliente.cod_clnt)}
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
export default CompMostrarClientes;
