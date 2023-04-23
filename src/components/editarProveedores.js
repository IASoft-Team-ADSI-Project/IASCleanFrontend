import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "/proveedores/";

const CompEditarProveedores = () => {
  const axiosPrivate = useAxiosPrivate();
  const [nombre_prov, setNombre_prov] = useState("");
  const [nit_prov, setNit_prov] = useState("");
  const [direccion_prov, setDireccion_prov] = useState("");
  const [mail_prov, setMail_prov] = useState("");
  const [telefono_prov, setTelefono_prov] = useState("");
  const [historico_Compras_prov, setHistorico_Compras_prov] = useState("");
  const navigate = useNavigate();
  const { cod_prov } = useParams();

  // funcion actualizar

  const ActualizarProveedores = async (g) => {
    g.preventDefault();
    await axiosPrivate.put(`${URL}${cod_prov}`, {
      nombre_prov: nombre_prov,
      nit_prov: nit_prov,
      direccion_prov: direccion_prov,
      mail_prov: mail_prov,
      telefono_prov: telefono_prov,
      historico_Compras_prov: historico_Compras_prov
    });
    navigate("/proveedores");
  };

  useEffect(() => {
    getProveedoresByid();
    // eslint-disable-next-line
}, []);


  const getProveedoresByid = async () => {
    const res = await axiosPrivate.get(`${URL}${cod_prov}`)
    setNombre_prov(res.data.nombre_prov)
    setNit_prov(res.data.nit_prov)
    setDireccion_prov(res.data.direccion_prov)
    setMail_prov(res.data.mail_prov)
    setTelefono_prov(res.data.telefono_prov)
    setHistorico_Compras_prov(res.data.historico_Compras_prov)
  };

  return (
    <div>
      <h3> Modulo Editar Proveedores</h3>
      <form onSubmit={ActualizarProveedores}>
      <div className="mb -3">
          <label className="form-label"> Nombre </label>
          <input
            value={nombre_prov}
            onChange={(g) => setNombre_prov(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Nit </label>
          <input
            value={nit_prov}
            onChange={(g) => setNit_prov(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Direccion </label>
          <input
            value={direccion_prov}
            onChange={(g) => setDireccion_prov(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Mail </label>
          <input
            value={mail_prov}
            onChange={(g) => setMail_prov(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Telefono </label>
          <input
            value={telefono_prov}
            onChange={(g) => setTelefono_prov(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Historico Compras </label>
          <input
            value={historico_Compras_prov}
            onChange={(g) => setHistorico_Compras_prov(g.target.value)}
            type="number"
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

export default CompEditarProveedores;
