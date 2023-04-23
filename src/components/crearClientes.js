//import axios from '../api/axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const URL = '/clientes/';

const CompAgregarClientes = () => {
  const axiosPrivate = useAxiosPrivate();
  const [cod_clnt, setCod_clnt] = useState("");
  const [nombre_clnt, setNombre_clnt] = useState("");
  const [direccion_clnt, setDireccion_clnt] = useState("");
  const [telefono_clnt, setTelefono_clnt] = useState("");
  const [mail_clnt, setMail_clnt] = useState("");
  const [tipo_clnt, setTipo_clnt] = useState("");
  const [historicos_ventas_clnt, setHistoricos_ventas_clnt] = useState("");
  const [id_nit_clnt, setId_nit_clnt] = useState("");
  const navigate = useNavigate();

  //funcion guardar
  const GuardarClientes = async (g) => {
    g.preventDefault();
    await axiosPrivate.post(URL, {
      cod_clnt: cod_clnt,
      nombre_clnt: nombre_clnt,
      direccion_clnt: direccion_clnt,
      telefono_clnt: telefono_clnt,
      mail_clnt: mail_clnt,
      tipo_clnt: tipo_clnt,
      historicos_ventas_clnt: historicos_ventas_clnt,
      id_nit_clnt: id_nit_clnt
    });
    navigate("/clientes");
  };
  return (
    <div>
      <h3> Modulo Agregar clientes</h3>
      <form onSubmit={GuardarClientes}>
        <div className="mb -3">
          <label className="form-label"> Código </label>
          <input
            value={cod_clnt}
            onChange={(g) => setCod_clnt(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Nombre </label>
          <input
            value={nombre_clnt}
            onChange={(g) => setNombre_clnt(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Direccion </label>
          <input
            value={direccion_clnt}
            onChange={(g) => setDireccion_clnt(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Telefono </label>
          <input
            value={telefono_clnt}
            onChange={(g) => setTelefono_clnt(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Mail </label>
          <input
            value={mail_clnt}
            onChange={(g) => setMail_clnt(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Tipo </label>
          <input
            value={tipo_clnt}
            onChange={(g) => setTipo_clnt(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Historico Ventas </label>
          <input
            value={historicos_ventas_clnt}
            onChange={(g) => setHistoricos_ventas_clnt(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Identificacion </label>
          <input
            value={id_nit_clnt}
            onChange={(g) => setId_nit_clnt(g.target.value)}
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
export default CompAgregarClientes;


