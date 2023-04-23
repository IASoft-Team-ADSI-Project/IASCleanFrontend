//import axios from '../api/axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const URL = "/productos/";


const CompMostrarProductos = () => {
  const axiosPrivate = useAxiosPrivate();
  const [productos, setProducto] = useState([]);
  
  useEffect(() => {
    const getProductos = async () => {
      const res = await axiosPrivate.get(URL);
      setProducto(res.data);
    };
    getProductos();
  
    // funcion para eliminar Productos
    
  }, [axiosPrivate])
  

  const eliminarProductos = async (cod_prod) => {
    await axiosPrivate.delete(`${URL}${cod_prod}`);
    const res = await axiosPrivate.get(URL , {
      withCredentials: true,
  
    });
    setProducto(res.data);
  };
  // creamos la funcion para mostrar los Productos

  

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/productos/agregar" className="btn btn-primary mt-2 mb-2">
            {" "}
            <i className="fa-sharp fa-solid fa-user-plus"> </i>
          </Link>
          <table className="table">
            <thead className="tableThedBg">
              <tr>
                <th> Código </th>
                <th> Nombre </th>
                <th> Tipo </th>
                <th> Presentación </th>
                <th> Valor </th>
                <th> Descripcion </th>
                <th> Cantidad </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td> {producto.cod_prod}</td>
                  <td> {producto.nombre_prod}</td>
                  <td> {producto.tipo_prod}</td>
                  <td> {producto.presentacion_prod}</td>
                  <td> {producto.valor_prod}</td>
                  <td> {producto.descripcion_prod}</td>
                  <td> {producto.cantidad_prod}</td>
                  <td>
                    <Link
                      to={`/productos/editar/${producto.cod_prod}`}
                      className="btn btn-info"
                    >
                      {" "}
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarProductos(producto.cod_prod)}
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
