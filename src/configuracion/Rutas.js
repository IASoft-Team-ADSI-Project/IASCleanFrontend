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
import CompMostrarMateriaPrima from "../componentes/mostrarMateriaPrima";
import CompAgregarMateriaPrima from "../componentes/crearMateriaPrima";
import CompEditarProductos from "../componentes/editarProductos";
import CompEditarClientes from "../componentes/editarClientes";
import CompEditarMateriaPrima from "../componentes/editarMateriaPrima";

const CompRutas = () => {
  return (
    <Routes>
      <Route path="/" element={<CompLogIn />} />

      {/*      <Route path="/RolInterno" element={<RolInterno roll="ADMINISTRADOR" />} />*/}
      {/*      <Route path="/RolInterno" element={<RolInterno roll="TRABAJADOR"/>} />*/}
      <Route path="/trabajador" element={<CompTrabajador />} />
      <Route path="/administrador" element={<CompAdministrador />} />

      {/*       <Route path="/RolExterno" element={<RolExterno roll="proveedor"/>} />
       */}
      {/*       <Route path="/RolExterno" element={<RolExterno roll="clientes"/>} />
       */}

      <Route path="/proveedores" element={<CompMostrarProveedores />} />
      <Route path="/proveedores/agregar" element={<CompAgregarProveedores />} />
      <Route path="/proveedores/editar/:cod_prov" element={<CompEditarProveedores />} />

      <Route path="/productos" element={<CompMostrarProductos />} />
      <Route path="/productos/agregar" element={<CompAgregarProductos />} />
      <Route
        path="/productos/editar/:cod_prod"
        element={<CompEditarProductos />}
      />

      <Route path="/clientes" element={<CompMostrarClientes />} />
      <Route path="/clientes/agregar" element={<CompAgregarClientes />} />
      <Route
        path="/clientes/editar/:cod_clnt"
        element={<CompEditarClientes />}
      />

      <Route
        path="/materiaPrima"
        element={<CompMostrarMateriaPrima />}
      />
      <Route
        path="/materiaPrima/agregar"
        element={<CompAgregarMateriaPrima />}
      />
      <Route
        path="/materiaPrima/editar/:cod_matPrima"
        element={<CompEditarMateriaPrima />}
      />
    </Routes>
  );
};

export default CompRutas;
/*
<Route path="/RolInterno" element={<RolInterno roll="ADMINISTRADOR" />} />
{      <Route path="/RolInterno" element={<RolInterno roll="TRABAJADOR"/>} />}
  
*/
