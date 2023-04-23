let accionesRol = [];

export function administrador() {
  const accionesRol = [
    { name: "Productos", icon: "fa-sharp fa-solid fa-cart-shopping ", link:`/productos` },
    { name: "Clientes", icon: "fa-solid fa-user", link:`/clientes` },
    { name: "Materia Prima", icon: "fa-solid fa-chart-simple ", link:`/materiaPrima` },
    { name: "Proveedores", icon: "fa-sharp fa-solid fa-truck-field ", link:`/proveedores` },
    { name: "Empleados", icon: "fa-solid fa-user", link:`/empleados` },
    { name: "Registro", icon: "fa-sharp fa-solid fa-user-plus", link:`/register` }
    //{ name: "Graficos de ventas", icon: "fa-solid fa-chart-simple ", link:`/productos` },
    //{ name: "Ingresos", icon: "fa-solid fa-money-bill-trend-up ", link:`/productos` },
    //{ name: "Gastos", icon: "fa-sharp fa-solid fa-minus ", link:`/productos` },
    //{ name: "Pending", icon: "fa-solid fa-minus ", link:`/productos` },
  ];

  return accionesRol;
}
export function trabajador() {
  const accionesRol = [
    { name: "Productos", icon: "fa-sharp fa-solid fa-cart-shopping ", link:`/productos` },
    { name: "Clientes", icon: "fa-solid fa-user ", link:`/clientes` },
    { name: "Materia Prima", icon: "fa-solid fa-chart-simple ", link:`/materiaPrima` },
    //{ name: "Ventas", icon: "fa-solid fa-money-bill-trend-up " },
    //{ name: "Pending", icon: "fa-sharp fa-solid fa-minus " },
  ];

  return accionesRol;
}

export function Vaciar() {
  const accionesRol = [];

  return accionesRol;
}

export function proveedor() {
  accionesRol = [];
  accionesRol.push("Pending");
  return accionesRol;
}
export function cliente() {
  accionesRol = [];
  accionesRol.push("Pending");
  return accionesRol;
}
