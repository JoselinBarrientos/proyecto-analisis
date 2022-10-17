function Employees() {
  const empleados = [
    {
      name: "Joselin",
      lastName: "Barrientos",
      email: "jbarrientos@petenfruit.gt",
      level: "Administrador",
      lastOnline: "hoy a las 19:23",
    },
    {
      name: "Joselin",
      lastName: "Barrientos",
      email: "jbarrientos@petenfruit.gt",
      level: "Administrador",
      lastOnline: "hoy a las 19:23",
    },
    {
      name: "Joselin",
      lastName: "Barrientos",
      email: "jbarrientos@petenfruit.gt",
      level: "Administrador",
      lastOnline: "hoy a las 19:23",
    },
    {
      name: "Axe;",
      lastName: "Aguilar",
      email: "jbarrientos@petenfruit.gt",
      level: "Administrador",
      lastOnline: "hoy a las 19:23",
    },
  ];

  return (
    <div class="finanzas h-50">
      <div class="row">
        <h2 class="text-center mb-3">Lista de personal</h2>
        <div class="row mb-3">
          <div class="col-lg-3">
            <button class="btn btn-primary">Agregar nuevo empleado</button>
          </div>
          <div class="col-lg-9"></div>
        </div>
        <div className="row">
          <div className="col-lg-11 mb-3">
            <input
              type="text"
              className="form-control "
              placeholder="Buscar empleado"
            />
          </div>
          <div className="col-lg-1">
            <button className="btn btn-primary d-block w-full">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div class="col-lg-12">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Usuario</th>
                <th scope="col">Nivel</th>
                <th scope="col">Ultimo</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado, index) => {
                return (
                  <tr>
                    <td>{empleado.name}</td>
                    <td>{empleado.lastName}</td>
                    <td>{empleado.email}</td>
                    <td>{empleado.level}</td>
                    <td>{empleado.lastOnline}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        style={{ marginRight: 5 }}
                      >
                        Eliminar
                      </button>
                      <button
                        className="btn btn-warning"
                        style={{ marginRight: 5 }}
                      >
                        Editar
                      </button>
                      <button className="btn btn-success">Configurar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8"></div>
        <div class="col-lg-4">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Anterior
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Siguiente
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Employees;
