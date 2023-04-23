import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const URL = "/empleados/";

const CompEditarEmpleados = () => {
  const axiosPrivate = useAxiosPrivate();
  const [empresa_ias_nit_empr, setEmpresa_ias_nit_empr] = useState("");
  const [nombre_empl, setNombre_empl] = useState("");
  const [apellido_empl, setApellido_empl] = useState("");
  const [area_empl, setArea_empl] = useState("");
  const [cargo_empl, setCargo_empl] = useState("");
  const [salario_empl, setSalario_empl] = useState("");
  const [telefono_empl, setTelefono_empl] = useState("");
  const [mail_empl, setMail_empl] = useState("");
  const [fecha_ini_empl, setFecha_ini_empl] = useState("");
  const [fecha_fin_empl, setFecha_fin_empl] = useState("");
  const [id_empl, setId_empl] = useState("");
  const navigate = useNavigate(); 
  const {cod_empl} = useParams();

  // funcion actualizar

  const ActualizarEmpleados = async (g) => {
    g.preventDefault();
    await axiosPrivate.put(`${URL}${cod_empl}`, {
        empresa_ias_nit_empr: empresa_ias_nit_empr,
        nombre_empl: nombre_empl,
        apellido_empl: apellido_empl,
        area_empl: area_empl,
        cargo_empl: cargo_empl,
        salario_empl: salario_empl,
        telefono_empl: telefono_empl,
        mail_empl: mail_empl,
        fecha_ini_empl: fecha_ini_empl,
        fecha_fin_empl: fecha_fin_empl,
        id_empl: id_empl
    });
    navigate("/empleados");
  };

  useEffect(() => {
    getEmpleadosByid();
    // eslint-disable-next-line
}, []);


  const getEmpleadosByid = async () => {
    const res = await axiosPrivate.get(`${URL}${cod_empl}`)
    console.log(res)
    setEmpresa_ias_nit_empr(res.data.empresa_ias_nit_empr)
    setNombre_empl(res.data.nombre_empl)
    setApellido_empl(res.data.apellido_empl)
    setArea_empl(res.data.area_empl)
    setCargo_empl(res.data.cargo_empl)
    setSalario_empl(res.data.salario_empl)
    setTelefono_empl(res.data.telefono_empl)
    setMail_empl(res.data.mail_empl)
    setFecha_ini_empl(res.data.fecha_ini_empl)
    setFecha_fin_empl(res.data.fecha_fin_empl)
    setId_empl(res.data.id_empl)

  };

  return (
    <div>
      <h3> Modulo Editar empleados</h3>
      <form onSubmit={ActualizarEmpleados}>
      <div className="mb -3">
          <label className="form-label"> Nit Empresa </label>
          <input
            value={empresa_ias_nit_empr}
            onChange={(g) => setEmpresa_ias_nit_empr(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Nombre </label>
          <input
            value={nombre_empl}
            onChange={(g) => setNombre_empl(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Apellido </label>
          <input
            value={apellido_empl}
            onChange={(g) => setApellido_empl(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Area </label>
          <input
            value={area_empl}
            onChange={(g) => setArea_empl(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Cargo </label>
          <input
            value={cargo_empl}
            onChange={(g) => setCargo_empl(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Salario </label>
          <input
            value={salario_empl}
            onChange={(g) => setSalario_empl(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Telefono </label>
          <input
            value={telefono_empl}
            onChange={(g) => setTelefono_empl(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Mail </label>
          <input
            value={mail_empl}
            onChange={(g) => setMail_empl(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Fecha Inicio </label>
          <input
            value={fecha_ini_empl}
            onChange={(g) => setFecha_ini_empl(g.target.value)}
            type="date"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Fecha Fin </label>
          <input
            value={fecha_fin_empl}
            onChange={(g) => setFecha_fin_empl(g.target.value)}
            type="date"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Identificacion </label>
          <input
            value={id_empl}
            onChange={(g) => setId_empl(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};

export default CompEditarEmpleados;
