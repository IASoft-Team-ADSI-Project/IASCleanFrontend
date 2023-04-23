import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const URL = "/register/";

const CompRegister = () => {
  const axiosPrivate = useAxiosPrivate();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [rol, setRol] = useState("");
  const [success, setSuccess] = useState(false);
  //const navigate = useNavigate();

  //funcion guardar
  const GuardarRegister = async (g) => {
    g.preventDefault();
    console.log({ user: user, pwd: pwd, rol: rol });
    await axiosPrivate.post(URL, {
      user: user,
      pwd: pwd,
      rol: rol,
    });
    setSuccess(true);
    //navigate("/register");
    setUser("");
    setPwd("");
    
  };
  return (
    <>
      {success ? (
        <section>
          <h1>Usuario Registrado!</h1>
        </section>
      ) : (
        <section>
          <h3> Registrar Usuario</h3>
          <form onSubmit={GuardarRegister}>
            <div className="mb -3">
              <label className="form-label"> Usuario </label>
              <input
                value={user}
                onChange={(g) => setUser(g.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb -3">
              <label className="form-label"> Contraseña </label>
              <input
                value={pwd}
                onChange={(g) => setPwd(g.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb -3">
              <label className="form-label"> Rol </label>
              <br />
              <select value={rol} onChange={(g) => setRol(g.target.value)}>
                <option value="">Seleccione una opción</option>
                <option value="Administrador">Administrador</option>
                <option value="Trabajador">Trabajador</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="fa-solid fa-floppy-disk"></i>
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default CompRegister;
