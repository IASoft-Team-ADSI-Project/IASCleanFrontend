import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/productos/";

const CompAgregarProductos = () => {
  const [cod_prod, setCod_prod] = useState("");
  const [nombre_prod, setNombre_prod] = useState("");
  const [tipo_prod, setTipo_prod] = useState("");
  const [presentacion_prod, setPresentacion_prod] = useState("");
  const [valor_prod, setValor_prod] = useState("");
  const [descripcion_prod, setDescripcion_prod] = useState("");
  const [cantidad_prod, setCantidad_prod] = useState("");
  const navigate = useNavigate();

  //funcion guardar
  const GuardarProductos = async (g) => {
    g.preventDefault();
    await axios.post(URL, {
      cod_prod: cod_prod,
      nombre_prod: nombre_prod,
      tipo_prod: tipo_prod,
      presentacion_prod: presentacion_prod,
      valor_prod: valor_prod,
      descripcion_prod: descripcion_prod,
      cantidad_prod: cantidad_prod
    });
    navigate("/productos");
  };
  return (
    <div>
      <h3> Modulo Agregar Productos</h3>
      <form onSubmit={GuardarProductos}>
        <div className="mb -3">
          <label className="form-label"> Código </label>
          <input
            value={cod_prod}
            onChange={(g) => setCod_prod(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Nombre </label>
          <input
            value={nombre_prod}
            onChange={(g) => setNombre_prod(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Tipo </label>
          <input
            value={tipo_prod}
            onChange={(g) => setTipo_prod(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Presentacion </label>
          <input
            value={presentacion_prod}
            onChange={(g) => setPresentacion_prod(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Valor </label>
          <input
            value={valor_prod}
            onChange={(g) => setValor_prod(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Descripcion </label>
          <input
            value={descripcion_prod}
            onChange={(g) => setDescripcion_prod(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Cantidad </label>
          <input
            value={cantidad_prod}
            onChange={(g) => setCantidad_prod(g.target.value)}
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
export default CompAgregarProductos;


