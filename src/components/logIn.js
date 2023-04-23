import React from "react";
import "../App.css";
//import axios from "../api/axios";
import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";

const URL = "/auth/";

const CompLogIn = () => {
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/productos";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  //const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (g) => {
    g.preventDefault();
    try {
      const response = await axios.get(`${URL}${user}-${pwd}`, {
        withCredentials: true,
        mode: "cors", // no-cors, *cors, same-origin,
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const rol = response?.data?.rol;
      setAuth({ user, pwd, rol, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Error");
      } else if (err.response?.status === 402) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Usuario o contraseña incorrectos");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div className="containerCuadro">
        <div className="espacio"></div>
        <h4>Log In</h4>
        <div className="espacio3"></div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            size="40"
            placeholder="Username"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <div className="espacio"></div>
          <input
            type="password"
            size="40"
            placeholder="Password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <div className="espacio"></div>
          <button className="btn-logIn">Log In</button>
          <div className="persistCheck">
            <input
              type="checkbox"
              id="persist"
              onChange={togglePersist}
              checked={persist}
            />
            <label htmlFor="persist">Trust This Device</label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CompLogIn;
