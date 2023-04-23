
import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const URL = "/productos/";

const CompEditarProductos = () => {
  const axiosPrivate = useAxiosPrivate();
  const [nombre_prod, setNombre_prod] = useState("");
  const [tipo_prod, setTipo_prod] = useState("");
  const [presentacion_prod, setPresentacion_prod] = useState("");
  const [valor_prod, setValor_prod] = useState("");
  const [descripcion_prod, setDescripcion_prod] = useState("");
  const [cantidad_prod, setCantidad_prod] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();
    const navigate = useNavigate();
    const {cod_prod} = useParams();

  // funcion actualizar

  const ActualizarProductos = async (g) => {
    g.preventDefault();
    try{
    await axiosPrivate.put(`${URL}${cod_prod}`, {
        nombre_prod: nombre_prod,
        tipo_prod: tipo_prod,
        presentacion_prod: presentacion_prod,
        valor_prod: valor_prod,
        descripcion_prod: descripcion_prod,
        cantidad_prod: cantidad_prod
    });
    navigate("/productos");
  }catch(err){
    if (!err?.response) {
      setErrMsg("Error");
    } else if (err.response?.status === 401) {
      setErrMsg("No tiene autorizacíon para realizar esta accíon");
    }
  }
  };

  useEffect(() => {
    getProductosByid();
    // eslint-disable-next-line
}, []);


  const getProductosByid = async () => {
    const res = await axiosPrivate.get(`${URL}${cod_prod}`)
    setNombre_prod(res.data.nombre_prod)
    setTipo_prod(res.data.tipo_prod)
    setPresentacion_prod(res.data.presentacion_prod)
    setValor_prod(res.data.valor_prod)
    setDescripcion_prod(res.data.descripcion_prod)
    setCantidad_prod(res.data.cantidad_prod)
  };

  return (
    <div>
      <h3> Modulo Editar Productos</h3>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form onSubmit={ActualizarProductos}>
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

export default CompEditarProductos;
