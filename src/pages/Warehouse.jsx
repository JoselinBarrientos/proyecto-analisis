function Warehouse() {
  const clientes = [
    {
      name: "Agencia Santa Elena",
      address: "11 av. 4-42",
      population: "Flores",
      department: "Peten",
      type: "Propio",
      phone: "+50255375929",
    },
    {
      name: "Agencia Santa Elena",
      address: "11 av. 4-42",
      population: "Flores",
      department: "Peten",
      type: "Propio",
      phone: "+50255375929",
    },
    {
      name: "Agencia Santa Elena",
      address: "11 av. 4-42",
      population: "Flores",
      department: "Peten",
      type: "Propio",
      phone: "+50255375929",
    },
    {
      name: "Agencia Santa Elena",
      address: "11 av. 4-42",
      population: "Flores",
      department: "Peten",
      type: "Propio",
      phone: "+50255375929",
    },
    {
      name: "Agencia Santa Elena",
      address: "11 av. 4-42",
      population: "Flores",
      department: "Peten",
      type: "Propio",
      phone: "+50255375929",
    },
    {
      name: "Agencia Santa Elena",
      address: "11 av. 4-42",
      population: "Flores",
      department: "Peten",
      type: "Propio",
      phone: "+50255375929",
    },
    {
      name: "Agencia Santa Elena",
      address: "11 av. 4-42",
      population: "Flores",
      department: "Peten",
      type: "Propio",
      phone: "+50255375929",
    },
  ];

  return (
    <div class="finanzas h-50">
      <div class="row">
        <h2 class="text-center mb-3">Lista de Almacenes</h2>
        <div class="row mb-3">
          <div class="col-lg-3">
            <button class="btn btn-primary">Agregar nuevo almacen</button>
          </div>
          <div class="col-lg-9"></div>
        </div>
        <div className="row">
          <div className="row col-lg-6">
            <div className="col-lg-10 mb-3">
              <input
                type="text"
                className="form-control "
                placeholder="Buscar cliente"
              />
            </div>
            <div className="col-lg-2">
              <button className="btn btn-primary d-block w-full">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <div className="row col-lg-6">
            <div className="col-lg-12">
              <select className="form-control" name="" id="">
                <option selected>Ordenar de la A - Z </option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Direccion</th>
                <th scope="col">Poblacion</th>
                <th scope="col">Departamento</th>
                <th scope="col">Telefono</th>
                <th scope="col">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => {
                return (
                  <tr>
                    <td>{cliente.name}</td>
                    <td>{cliente.address}</td>
                    <td>{cliente.population}</td>
                    <td>{cliente.department}</td>
                    <td>{cliente.phone}</td>
                    <td>{cliente.type}</td>
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

export default Warehouse;
