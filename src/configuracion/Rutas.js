import { Route, Routes } from "react-router-dom";
import CompSignIn from "../componentes/signIn";
import CompInterfazTrabajador from "../componentes/interfazTrabajador";

const CompRutas = () => {
  return (
    <Routes>
      <Route path="/" element={<CompSignIn />} />
      <Route path="/interfazTrabajador" element={<CompInterfazTrabajador />} />
    </Routes>
  );
};

export default CompRutas;
