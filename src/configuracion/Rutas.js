import { Route, Routes } from "react-router-dom";
import CompLogIn from "../componentes/logIn";
import CompTrabajador from "../componentes/trabajador";
import CompAdministrador from "../componentes/administrador";
import CompMostrarProveedores from "../componentes/mostrarProveedores";
import CompAgregarProveedores from "../componentes/crearProveedores";
import CompEditarProveedores from "../componentes/editarProveedores";
import CompMostrarProductos from "../componentes/mostrarProductos";
import CompAgregarProductos from "../componentes/crearProductos";
import CompMostrarClientes from "../componentes/mostrarClientes";
import CompAgregarClientes from "../componentes/crearClientes";
const CompRutas = () => {
  return (
    <Routes>
      <Route path="/" element={<CompLogIn />} />
      <Route path="/trabajador" element={<CompTrabajador />} />
      <Route path="/administrador" element={<CompAdministrador />} />

      <Route path="/proveedores" element={<CompMostrarProveedores />} />
      <Route path="/proveedores/agregar" element={<CompAgregarProveedores />} />
      <Route path="/proveedores/editar" element={<CompEditarProveedores />} />

      <Route path="/productos" element={<CompMostrarProductos />} />
      <Route path="/productos/agregar" element={<CompAgregarProductos />} />

      <Route path="/clientes" element={<CompMostrarClientes />} />
      <Route path="/clientes/agregar" element={<CompAgregarClientes />} />



    </Routes>
  );
};

export default CompRutas;
