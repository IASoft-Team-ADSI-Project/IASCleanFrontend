import useAxiosPrivate from "../hooks/useAxiosPrivate";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "/proveedores";

const CompMostrarProveedores = () => {
  const axiosPrivate = useAxiosPrivate();
  const [proveedores, setProveedor] = useState([]);
  useEffect(() => {
    const getProveedores = async () => {
      const res = await axiosPrivate.get(URL);
      setProveedor(res.data);
    };
    getProveedores();
  }, [axiosPrivate]);

  // funcion para eliminar proveedores
  const eliminarProveedores = async (cod_prov) => {
    await axiosPrivate.delete(`${URL}${cod_prov}`);
    const res = await axiosPrivate.get(URL);
    setProveedor(res.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/proveedores/agregar" className="btn btn-primary mt-2 mb-2">
            {" "}
            <i className="fa-sharp fa-solid fa-user-plus"> </i>
          </Link>
          <table className="table">
            <thead className="tableThedBg">
              <tr>
                <th> Código </th>
                <th> Nombre </th>
                <th> Nit </th>
                <th> Direccion </th>
                <th> Mail </th>
                <th> Telefono </th>
                <th> Historico Compras </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map((proveedor, index) => (
                <tr key={index}>
                  <td> {proveedor.cod_prov}</td>
                  <td> {proveedor.nombre_prov}</td>
                  <td> {proveedor.nit_prov}</td>
                  <td> {proveedor.direccion_prov}</td>
                  <td> {proveedor.mail_prov}</td>
                  <td> {proveedor.telefono_prov}</td>
                  <td> {proveedor.historico_Compras_prov}</td>
                  <td>
                    <Link
                      to={`/proveedores/editar/${proveedor.cod_prov}`}
                      className="btn btn-info"
                    >
                      {" "}
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarProveedores(proveedor.cod_prov)}
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
export default CompMostrarProveedores;
