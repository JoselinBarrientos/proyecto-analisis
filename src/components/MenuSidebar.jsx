import { useState } from "react";
import MenuItem from "./MenuItem";

const sidebarMenuItems = [
  {
    url: "/",
    name: "Dashboard",
    icon: "menu-button-wide-fill", //iconos ejemplo
  },
  { url: "ventas", name: "Ventas", icon: "cart-check-fill" },
  { url: "clientes", name: "Clientes", icon: "file-person" },
  { url: "empleados", name: "Empleados", icon: "people-fill" },
  { url: "almacen", name: "Almacén", icon: "building" },
  { url: "departamentos", name: "Departamentos", icon: "briefcase" },
  { url: "produccion", name: "Producción", icon: "hammer" },
  { url: "inventarios", name: "Inventarios", icon: "boxes" },
  { url: "planilla", name: "Planilla", icon: "list" },
  { url: "reportes", name: "Reportes", icon: "file-bar-graph-fill" },
  { url: "configuracion", name: "Configuración", icon: "gear-fill" },
];

function MenuSidebar() {
  const [show, setShow] = useState(true);

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: 250, marginLeft: show ? 0 : -250 }}
    >
      <button
      alt={show ? "Mostrar" : "Ocultar"}
        style={{
          width: 30,
          height: 30,
          position: "absolute",
          left: show ? 240 : 0,
          top: 0,
        }}
        className="btn btn-dark"
        onClick={() => {
          setShow((show) => {
            return !show;
          });
        }}
      >
        {show ? (
          <i className="bi bi-eye-slash-fill"></i>
        ) : (
          <i className="bi bi-eye-fill"></i>
        )}
      </button>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">“FRUITGT”</span>
      </a>
      <hr />
      <ul className={"nav nav-pills flex-column mb-auto"}>
        {sidebarMenuItems.map((element, index) => {
          return <MenuItem data={element} key={index}></MenuItem>;
        })}
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="/"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="/img/jb.jpeg"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2 imgyo"
          />
          <strong>Joselin Barrientos</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="/">
              Configuración
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Perfil
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuSidebar;
