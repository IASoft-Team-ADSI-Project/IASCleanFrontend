import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "/materiaPrima/";

const CompEditarMateriaPrima = () => {
  const axiosPrivate = useAxiosPrivate();
  const [empresa_ias_nit_empr, setEmpresa_ias_nit_empr] = useState("");
  const [nombre_matPrima, setNombre_matPrima] = useState("");
  const [descripcion_matPrima, setDescripcion_matPrima] = useState("");
  const [tipo_matPrima, setTipo_matPrima] = useState("");
  const [unidad_medida_matPrima, setUnidad_medida_matPrima] = useState("");
  const [presentacion_matPrima, setPresentacion_matPrima] = useState("");
  const [precio_uni_medida_matPrima, setPrecio_uni_medida_matPrima] =
    useState("");
  const [precio_presentacion_matPrima, setPrecio_presentacion_matPrima] =
    useState("");
  const [cantidad_matPrima, setCantidad_matPrima] = useState("");
  const navigate = useNavigate();
  const { cod_matPrima } = useParams();

  // funcion actualizar

  const ActualizarMateriaPrima = async (g) => {
    g.preventDefault();
    await axiosPrivate.put(`${URL}${cod_matPrima}`, {
      empresa_ias_nit_empr: empresa_ias_nit_empr,
      nombre_matPrima: nombre_matPrima,
      descripcion_matPrima: descripcion_matPrima,
      tipo_matPrima: tipo_matPrima,
      unidad_medida_matPrima: unidad_medida_matPrima,
      presentacion_matPrima: presentacion_matPrima,
      precio_uni_medida_matPrima: precio_uni_medida_matPrima,
      precio_presentacion_matPrima: precio_presentacion_matPrima,
      cantidad_matPrima: cantidad_matPrima,
    });
    navigate("/materiaPrima");
  };

  useEffect(() => {
    getMateriaPrimaByid();
    // eslint-disable-next-line
  }, []);

  const getMateriaPrimaByid = async () => {
    const res = await axiosPrivate.get(`${URL}${cod_matPrima}`);
    setEmpresa_ias_nit_empr(res.data.empresa_ias_nit_empr);
    setNombre_matPrima(res.data.nombre_matPrima);
    setDescripcion_matPrima(res.data.descripcion_matPrima);
    setTipo_matPrima(res.data.tipo_matPrima);
    setUnidad_medida_matPrima(res.data.unidad_medida_matPrima);
    setPresentacion_matPrima(res.data.presentacion_matPrima);
    setPrecio_uni_medida_matPrima(res.data.precio_uni_medida_matPrima);
    setPrecio_presentacion_matPrima(res.data.precio_presentacion_matPrima);
    setCantidad_matPrima(res.data.cantidad_matPrima);
  };

  return (
    <div>
      <h3> Modulo Editar MateriaPrima</h3>
      <form onSubmit={ActualizarMateriaPrima}>
        <div className="mb -3">
          <label className="form-label"> Empresa </label>
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
            value={nombre_matPrima}
            onChange={(g) => setNombre_matPrima(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Descripcion </label>
          <input
            value={descripcion_matPrima}
            onChange={(g) => setDescripcion_matPrima(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Tipo </label>
          <input
            value={tipo_matPrima}
            onChange={(g) => setTipo_matPrima(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Unidad de medida </label>
          <input
            value={unidad_medida_matPrima}
            onChange={(g) => setUnidad_medida_matPrima(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Presentacion </label>
          <input
            value={presentacion_matPrima}
            onChange={(g) => setPresentacion_matPrima(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Precio por Unidad </label>
          <input
            value={precio_uni_medida_matPrima}
            onChange={(g) => setPrecio_uni_medida_matPrima(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Precio Presentacion </label>
          <input
            value={precio_presentacion_matPrima}
            onChange={(g) => setPrecio_presentacion_matPrima(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Cantidad </label>
          <input
            value={cantidad_matPrima}
            onChange={(g) => setCantidad_matPrima(g.target.value)}
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

export default CompEditarMateriaPrima;
