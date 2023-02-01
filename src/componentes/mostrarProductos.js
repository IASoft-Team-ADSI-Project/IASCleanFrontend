import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/api/producto/";

const CompMostrarProductos = () => {
  const [productos, setProducto] = useState([]);
  useEffect(() => {
    getProductos();
  }, []);

  // creamos la funcion para mostrar los Productos

  const getProductos = async () => {
    const res = await axios.get(URL);
    setProducto(res.data);
  };

  // funcion para eliminar Productos
  const eliminarProductos = async (id) => {
    await axios.delete(`${URL}${id}`);
    getProductos();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/productos/agregar" className="btn btn-primary mt-2 mb-2">
            {" "}
            <i className="fa-sharp fa-solid fa-user-plus"> </i>
          </Link>
          <Link to="/administrador" className="btn btn-primary mt-2 mb-2">
            {"Inicio"}
            
          </Link>
          <table className="table">
            <thead className="tableThedBg">
              <tr>
                <th> Nombres </th>
                <th> Apellidos </th>
                <th> Documento </th>
                <th> Correo </th>
                <th> Telefono </th>
                <th> Direccion </th>
                <th> Empresa </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td> {producto.nombres}</td>
                  <td> {producto.apellidos}</td>
                  <td> {producto.documento}</td>
                  <td> {producto.correo}</td>
                  <td> {producto.telefono}</td>
                  <td> {producto.direccion}</td>
                  <td> {producto.empresa}</td>
                  <td>
                    <Link
                      to={`/productos/editar/${producto._id}`}
                      className="btn btn-info"
                    >
                      {" "}
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarProductos(producto._id)}
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
export default CompMostrarProductos;
