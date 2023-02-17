let accionesRol = [];

export function administrador() {
  accionesRol = [];
  accionesRol.push(
    "Productos",
    "Clientes",
    "Insumos y Materia Prima",
    "Proveedores",
    "Graficos de ventas",
    "Ingresos",
    "Gastos",
    "Pending"
  );
  return accionesRol;
}
export function trabajador() {
  console.log("NOOOO");
  accionesRol = [];
  accionesRol.push(
    "Productos",
    "Clientes",
    "Insumos y Materia Prima",
    "Ventas",
    "Pending"
  );
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
