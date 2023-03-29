import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/materiaPrima/";

const CompAgregarMateriaPrima = () => {
  const [cod_matPrima, setCod_matPrima] = useState("");
  const [empresa_ias_nit_empr, setEmpresa_ias_nit_empr] = useState("");
  const [nombre_matPrima, setNombre_matPrima] = useState("");
  const [descripcion_matPrima, setDescripcion_matPrima] = useState("");
  const [tipo_matPrima, setTipo_matPrima] = useState("");
  const [unidad_medida_matPrima, setUnidad_medida_matPrima] = useState("");
  const [presentacion_matPrima, setPresentacion_matPrima] = useState("");
  const [precio_uni_medida_matPrima, setPrecio_uni_medida_matPrima] = useState("");
  const [precio_presentacion_matPrima, setPrecio_presentacion_matPrima] = useState("");
  const [cantidad_matPrima, setCantidad_matPrima] = useState("");
  const navigate = useNavigate();

  //funcion guardar
  const GuardarMateriaPrima = async (g) => {
    g.preventDefault();
    await axios.post(URL, {
      cod_matPrima: cod_matPrima,
      empresa_ias_nit_empr: empresa_ias_nit_empr,
      nombre_matPrima: nombre_matPrima,
      descripcion_matPrima: descripcion_matPrima,
      tipo_matPrima: tipo_matPrima,
      unidad_medida_matPrima: unidad_medida_matPrima,
      presentacion_matPrima: presentacion_matPrima,
      precio_uni_medida_matPrima: precio_uni_medida_matPrima,
      precio_presentacion_matPrima: precio_presentacion_matPrima,
      cantidad_matPrima: cantidad_matPrima
    });
    navigate("/materiaPrima");
  };
  return (
    <div>
      <h3> Modulo Agregar Materia Prima</h3>
      <form onSubmit={GuardarMateriaPrima}>
        <div className="mb -3">
          <label className="form-label"> Código </label>
          <input
            value={cod_matPrima}
            onChange={(g) => setCod_matPrima(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

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
export default CompAgregarMateriaPrima;