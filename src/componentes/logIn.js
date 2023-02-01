import React from "react";
import "../App.css";
import CompSeccionDerecha from "../componentes/seccionDerecha";

const CompLogIn = () => {
  return (
      <div className={"container"}>
        <div className={"row row-cols-2 gx-5"}>
          <div className="col">
            <div className="logInDiv">
              <form>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">
                    Usuario
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    for="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Contraseña
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-logIn">
                  Aceptar
                </button>
                <button type="submit" className="button2">
                  RECUPERAR DE CONTRASEÑA
                </button>
              </form>
            </div>
          </div>
          <div className="col">
            <CompSeccionDerecha />
          </div>
        </div>
      </div>
  );
};

export default CompLogIn;
