import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const URL = "/empleados/";

const CompMostrarEmpleados = () => {
  const axiosPrivate = useAxiosPrivate();
  const [empleados, setEmpleado] = useState([]);

  useEffect(() => {
    const getEmpleados = async () => {
      const res = await axiosPrivate.get(URL);
      setEmpleado(res.data);
    };
    getEmpleados();
  }, [axiosPrivate]);

  // funcion para eliminar empleados
  const eliminarEmpleados = async (cod_empl) => {
    await axiosPrivate.delete(`${URL}${cod_empl}`);
    const res = await axiosPrivate.get(URL);
    setEmpleado(res.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/empleados/agregar" className="btn btn-primary mt-2 mb-2">
            {" "}
            <i className="fa-sharp fa-solid fa-user-plus"> </i>
          </Link>
          <table className="table">
            <thead className="tableThedBg">
              <tr>
                <th> Código </th>
                <th> Nit Empresa </th>
                <th> Nombre </th>
                <th> Apellido </th>
                <th> Area </th>
                <th> Cargo </th>
                <th> Salario </th>
                <th> Telefono </th>
                <th> Mail </th>
                <th> Fecha inicio </th>
                <th> Fecha final </th>
                <th> Identificacion </th>

                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado, index) => (
                <tr key={index}>
                  <td> {empleado.cod_empl}</td>
                  <td> {empleado.empresa_ias_nit_empr}</td>
                  <td> {empleado.nombre_empl}</td>
                  <td> {empleado.apellido_empl}</td>
                  <td> {empleado.area_empl}</td>
                  <td> {empleado.cargo_empl}</td>
                  <td> {empleado.salario_empl}</td>
                  <td> {empleado.telefono_empl}</td>
                  <td> {empleado.mail_empl}</td>
                  <td> {empleado.fecha_ini_empl}</td>
                  <td> {empleado.fecha_fin_empl}</td>
                  <td> {empleado.id_empl}</td>
                  <td>
                    <Link
                      to={`/empleados/editar/${empleado.cod_empl}`}
                      className="btn btn-info"
                    >
                      {" "}
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarEmpleados(empleado.cod_empl)}
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
export default CompMostrarEmpleados;
