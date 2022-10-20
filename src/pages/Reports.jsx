function Reports() {
  return (
    <>
      <h2>Reportes</h2>
      <h5>Seleccionar tipo de reporte</h5>
      <div className="row justify-content-center">
        <div className="col-lg-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            ></input>

            <label class="form-check-label" for="flexRadioDefault1">
              Resumen
            </label>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            ></input>

            <label class="form-check-label" for="flexRadioDefault1">
              Reporte
            </label>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            ></input>

            <label class="form-check-label" for="flexRadioDefault1">
              Productos
            </label>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            ></input>

            <label class="form-check-label" for="flexRadioDefault1">
              Ventas
            </label>
          </div>
        </div>
      </div>
      <hr />
      <h5>Seleccionar rango de fechas</h5>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <div class="mb-1">
                <label for="exampleInputEmail1" class="form-label">
                  Del
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleInputEmail1"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="mb-1">
                <label for="exampleInputEmail1" class="form-label">
                  Al
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleInputEmail1"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div class="form-check2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault2"
                  id="flexRadioDefault2"
                  checked
                ></input>

                <label class="form-check-label" for="flexRadioDefault1">
                  Fecha de emisión
                </label>
              </div>
              <div class="form-check2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault2"
                  id="flexRadioDefault2"
                ></input>

                <label class="form-check-label" for="flexRadioDefault1">
                  Fecha de validación
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <button className="btn btn-primary">Generar</button>
      </div>
      <div className="pt-5">
        <h5 class="mb-2">Ultimos reportes generados</h5>
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
              <td>Resumen</td>
              <td>01/01/2022 - 31/09/2022</td>
              <td>Joselin</td>
              <td>
                <button className="btn btn-success w-100">Descargar</button>
              </td>
            </tr>
            <tr>
              <th scope="col">1</th>
              <td>16/10/2022</td>
              <td>Resumen</td>
              <td>01/01/2022 - 31/09/2022</td>
              <td>Joselin</td>
              <td>
                <button className="btn btn-success w-100">Descargar</button>
              </td>
            </tr>
            <tr>
              <th scope="col">1</th>
              <td>16/10/2022</td>
              <td>Resumen</td>
              <td>01/01/2022 - 31/09/2022</td>
              <td>Joselin</td>
              <td>
                <button className="btn btn-success w-100">Descargar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Reports;
