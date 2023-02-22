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
import CompInsumosMateriaPrima from "../componentes/InsumosMateriaPrima";
import CompAgregarInsumosMateriaPrima from "../componentes/crearInsumosMateriaPrima";
import RolInterno from "../componentes/RolInterno";

const CompRutas = () => {
  return (
    <Routes>
      <Route path="/" element={<CompLogIn />} />

      <Route path="/RolInterno" element={<RolInterno roll="TRABAJADOR" />} />
      {/*       <Route path="/RolInterno" element={<RolInterno roll="TRABAJADOR"/>} />
       */}
      <Route path="/trabajador" element={<CompTrabajador />} />
      <Route path="/administrador" element={<CompAdministrador />} />

      {/*       <Route path="/RolExterno" element={<RolExterno roll="proveedor"/>} />
       */}
      {/*       <Route path="/RolExterno" element={<RolExterno roll="clientes"/>} />
       */}

      <Route path="/proveedores" element={<CompMostrarProveedores />} />
      <Route path="/proveedores/agregar" element={<CompAgregarProveedores />} />
      <Route path="/proveedores/editar" element={<CompEditarProveedores />} />

      <Route path="/productos" element={<CompMostrarProductos />} />
      <Route path="/productos/agregar" element={<CompAgregarProductos />} />

      <Route path="/clientes" element={<CompMostrarClientes />} />
      <Route path="/clientes/agregar" element={<CompAgregarClientes />} />

      <Route
        path="/insumosYMateriaPrima"
        element={<CompInsumosMateriaPrima />}
      />
      <Route
        path="/insumosYMateriaPrima/agregar"
        element={<CompAgregarInsumosMateriaPrima />}
      />
    </Routes>
  );
};

export default CompRutas;
