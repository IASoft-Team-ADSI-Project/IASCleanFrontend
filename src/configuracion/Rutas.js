import { Route, Routes } from "react-router-dom";
import CompLogIn from "../components/logIn";
import CompMostrarProveedores from "../components/mostrarProveedores";
import CompAgregarProveedores from "../components/crearProveedores";
import CompEditarProveedores from "../components/editarProveedores";
import CompMostrarProductos from "../components/mostrarProductos";
import CompAgregarProductos from "../components/crearProductos";
import CompMostrarClientes from "../components/mostrarClientes";
import CompAgregarClientes from "../components/crearClientes";
import CompMostrarMateriaPrima from "../components/mostrarMateriaPrima";
import CompAgregarMateriaPrima from "../components/crearMateriaPrima";
import CompEditarProductos from "../components/editarProductos";
import CompEditarClientes from "../components/editarClientes";
import CompEditarMateriaPrima from "../components/editarMateriaPrima";
import RequireAuth from "../components/RequireAuth";
import CompMostrarEmpleados from "../components/mostrarEmpleados";
import CompAgregarEmpleados from "../components/crearEmpleados";
import CompEditarEmpleados from "../components/editarEmpleados";
import PersistLogin from "../components/PersistLogin";
import CompRegister from "../components/Register";
//import Layout from "../components/Layout";

const CompRutas = () => {
  return (
    <Routes>
      <Route path="/" element={<CompLogIn />} />

      {/*      <Route path="/RolInterno" element={<RolInterno roll="ADMINISTRADOR" />} />*/}
      {/*      <Route path="/RolInterno" element={<RolInterno roll="TRABAJADOR"/>} />*/}

      {/*       <Route path="/RolExterno" element={<RolExterno roll="proveedor"/>} />
       */}
      {/*       <Route path="/RolExterno" element={<RolExterno roll="clientes"/>} />
       */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={["Administrador"]} />}>
          <Route path="/proveedores" element={<CompMostrarProveedores />} />
          <Route
            path="/proveedores/agregar"
            element={<CompAgregarProveedores />}
          />
          <Route
            path="/proveedores/editar/:cod_prov"
            element={<CompEditarProveedores />}
          />
          <Route path="/empleados" element={<CompMostrarEmpleados />} />
          <Route path="/empleados/agregar" element={<CompAgregarEmpleados />} />
          <Route
            path="/empleados/editar/:cod_empl"
            element={<CompEditarEmpleados />}
          />
          <Route path="/register" element={<CompRegister/>} />
        </Route>

        <Route
          element={
            <RequireAuth allowedRoles={["Administrador", "Trabajador"]} />
          }
        >
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

          <Route path="/materiaPrima" element={<CompMostrarMateriaPrima />} />
          <Route
            path="/materiaPrima/agregar"
            element={<CompAgregarMateriaPrima />}
          />
          <Route
            path="/materiaPrima/editar/:cod_matPrima"
            element={<CompEditarMateriaPrima />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default CompRutas;
/*
<Route path="/RolInterno" element={<RolInterno roll="ADMINISTRADOR" />} />
{      <Route path="/RolInterno" element={<RolInterno roll="TRABAJADOR"/>} />}
  
*/
