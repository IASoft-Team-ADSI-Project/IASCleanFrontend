let accionesRol = [];

export function administrador() {
  const accionesRol = [
    { name: "Productos", icon: <fa-sharp fa-solid fa-cart-shopping /> },
    { name: "Clientes", icon: <fa-solid fa-user /> },
    { name: "Insumos y Materia Prima", icon: <fa-solid fa-chart-simple /> },
    { name: "Proveedores", icon: <fa-sharp fa-solid fa-truck-field /> },
    { name: "Graficos de ventas", icon: <fa-solid fa-chart-simple /> },
    { name: "Ingresos", icon: <fa-solid fa-money-bill-trend-up /> },
    { name: "Gastos", icon: <fa-sharp fa-solid fa-minus /> },
    { name: "Pending", icon: <fa-solid fa-minus /> },
  ];

  return accionesRol;
}
export function trabajador() {
  const accionesRol = [
    { name: "Productos", icon: <fa-sharp fa-solid fa-cart-shopping /> },
    { name: "Clientes", icon: <fa-solid fa-user /> },
    { name: "Insumos y Materia Prima", icon: <fa-solid fa-chart-simple /> },
    { name: "Ventas", icon: <fa-solid fa-money-bill-trend-up /> },
    { name: "Pending", icon: <fa-sharp fa-solid fa-minus /> },
  ];

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
