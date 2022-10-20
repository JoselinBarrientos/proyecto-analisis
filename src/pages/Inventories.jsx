export default function Inventories() {
  const inventarios = [
    {
      name: "Productos perecederos",
      warehouse: "11 av. 4-42",
      buy_value: "Flores",
      sell_value: "Peten",
    },
  ];

  return (
    <div class="finanzas h-50">
      <div class="row">
        <h2 class="text-center mb-3">
          Lista de Inventarios (de los almacenes existentes)
        </h2>
        <div class="row mb-3">
          <div class="col-lg-3">
            <button class="btn btn-primary">Agregar nuevo inventario</button>
          </div>
          <div class="col-lg-9"></div>
        </div>
        <div className="row">
          <div className="row col-lg-6">
            <div className="col-lg-10 mb-3">
              <input
                type="text"
                className="form-control "
                placeholder="Buscar inventario"
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
                <th scope="col">Almacen</th>
                <th scope="col">Valor compra</th>
                <th scope="col">Valor venta</th>
                <th scope="col">Reportes / Incidentes</th>
              </tr>
            </thead>
            <tbody>
              {inventarios.map((cliente, index) => {
                return (
                  <tr>
                    <td>{cliente.name}</td>
                    <td>{cliente.warehouse}</td>
                    <td>{cliente.buy_value}</td>
                    <td>{cliente.sell_value}</td>
                    <td>
                      <button className="btn btn-primary">Ver reportes</button>
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
