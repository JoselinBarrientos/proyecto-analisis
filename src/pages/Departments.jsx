function Departments() {
  const departments = [
    {
      name: "Finanzas",
      count: 12,
    },
  ];

  const empleados = [
    {
      name: "Joselin",
      lastName: "Barrientos",
      puesto: "Jefa",
    },
    {
      name: "Joselin",
      lastName: "Barrientos",
      puesto: "Jefa",
    },
    {
      name: "Joselin",
      lastName: "Barrientos",
      puesto: "Jefa",
    },
    {
      name: "Joselin",
      lastName: "Barrientos",
      puesto: "Jefa",
    },
    {
      name: "Joselin",
      lastName: "Barrientos",
      puesto: "Jefa",
    },
    {
      name: "Joselin",
      lastName: "Barrientos",
      puesto: "Jefa",
    },
    {
      name: "Joselin",
      lastName: "Barrientos",
      puesto: "Jefa",
    },
    {
      name: "Joselin",
      lastName: "Barrientos",
      puesto: "Jefa",
    },
    {
      name: "Joselin",
      lastName: "Barrientos",
      puesto: "Jefa",
    },
  ];

  return (
    <div class="finanzas h-50">
      <div className="row">
        <div className="col-lg-6">
          <div class="row">
            <h2 class="text-center mb-3">Lista de Departamentos</h2>
            <div class="row mb-3">
              <div class="col-lg-12">
                <button class="btn btn-primary">
                  Agregar nuevo departamento
                </button>
              </div>
            </div>
            <div className="row">
              <div className="row col-lg-12">
                <div className="col-lg-10 mb-3">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Buscar departamento"
                  />
                </div>
                <div className="col-lg-2">
                  <button className="btn btn-primary d-block w-full">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <table class="table">
                <thead class="table-dark">
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad de empleados</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((cliente, index) => {
                    return (
                      <tr>
                        <td>{cliente.name}</td>
                        <td>{cliente.count}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div class="row">
            <h2 class="text-center mb-3">
              Lista de Empleados de este departamento
            </h2>

            <div class="col-lg-12">
              <table class="table">
                <thead class="table-dark">
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Puesto</th>
                  </tr>
                </thead>
                <tbody>
                  {empleados.map((empleado, index) => {
                    return (
                      <tr>
                        <td>{empleado.name}</td>
                        <td>{empleado.lastName}</td>
                        <td>{empleado.puesto}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
