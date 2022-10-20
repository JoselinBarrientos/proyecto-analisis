const clientes = [
  {
    name: "Joselin",
    lastName: "Barrientos",
    position: "Jefa",
    department: "Administración",
    salary: "Q6,250.00",
    bonifications: "Q1,250.00",
  },
  {
    name: "Joselin",
    lastName: "Barrientos",
    position: "Jefa",
    department: "Administración",
    salary: "Q6,250.00",
    bonifications: "Q1,250.00",
  },
  {
    name: "Joselin",
    lastName: "Barrientos",
    position: "Jefa",
    department: "Administración",
    salary: "Q6,250.00",
    bonifications: "Q1,250.00",
  },
  {
    name: "Joselin",
    lastName: "Barrientos",
    position: "Jefa",
    department: "Administración",
    salary: "Q6,250.00",
    bonifications: "Q1,250.00",
  },
  {
    name: "Joselin",
    lastName: "Barrientos",
    position: "Jefa",
    department: "Administración",
    salary: "Q6,250.00",
    bonifications: "Q1,250.00",
  },
  {
    name: "Joselin",
    lastName: "Barrientos",
    position: "Jefa",
    department: "Administración",
    salary: "Q6,250.00",
    bonifications: "Q1,250.00",
  },
  {
    name: "Joselin",
    lastName: "Barrientos",
    position: "Jefa",
    department: "Administración",
    salary: "Q6,250.00",
    bonifications: "Q1,250.00",
  },
];

export default function Payroll() {
  return (
    <div class="finanzas h-50">
      <div class="row">
        <h2 class="text-center mb-3">Planilla</h2>
        <div class="row mb-3">
          <div class="col-lg-3">
            <button class="btn btn-primary">Nueva planilla de pago</button>
          </div>
          <div class="col-lg-9"></div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6">
            <label>Tipo de planilla</label>
            <select className="form-select">
              <option value="">Pagos ordinarios</option>
              <option value="">Pagos extraordinarios</option>
            </select>
          </div>
          <div className="col-lg-6">
            <label>Mes</label>
            <select className="form-select">
              <option value="">Enero</option>
              <option value="">Febrero</option>
            </select>
          </div>
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
                <th scope="col">Agregar a planilla?</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Posicion</th>
                <th scope="col">Departamento</th>
                <th scope="col">Sueldo</th>
                <th scope="col">Bonificaciones</th>
                <th scope="col">Detalle</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => {
                return (
                  <tr>
                    <td>
                      <input type="checkbox" className="form-check" />
                    </td>
                    <td>{cliente.name}</td>
                    <td>{cliente.lastName}</td>
                    <td>{cliente.position}</td>
                    <td>{cliente.department}</td>
                    <td>{cliente.salary}</td>
                    <td>{cliente.bonifications}</td>
                    <td>
                      <button className="btn btn-primary">Ver bonos</button>
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
      <div className="pt-5">
        <h5 class="mb-2">Ultimas planillas generadas</h5>
        <table class="table border bg-white">
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Rango de Fechas</th>
              <th>Usuario</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">1</th>
              <td>16/10/2022</td>
              <td>Pagos ordinarios</td>
              <td>01/01/2022 - 31/01/2022</td>
              <td>Joselin</td>
              <td>
                <button className="btn btn-success w-100">Descargar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
