function Ventas() {
  return (
    <div class="finanzas h-50">
      <div class="row">
        <div class="col-lg-4">
          <h2>Datos del cliente</h2>
          <form>
            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Fecha
              </label>
              <input type="date" class="form-control" id="exampleInputEmail1" />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Desea guardar el cliente
              </label>
            </div>
            <div class="mb-3">
              <input type="number" class="form-control" placeholder="NIT" />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Razon Social"
              />
            </div>
            <div class="mb-1">
              <input type="text" class="form-control" placeholder="Correo" />
            </div>
            <div class="mb-1">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Observaciones, mínimo 200 caracteres"
                maxlength="200"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="col-lg-4">
          <h2>Datos de Facturación</h2>
          <form>
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="Direccion" />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="Municipio" />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Departamento"
              />
            </div>
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>País</option>
                <option value="1">Guatemala</option>
                <option value="2">Mexico</option>
                <option value="3">El Salvador</option>
              </select>
            </div>
          </form>
        </div>
        <div class="col-lg-4">
          <h2>Establecimiento</h2>
          <form>
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>Seleccione el establecimiento</option>
                <option value="1">Guatemala</option>
                <option value="2">Mexico</option>
                <option value="3">El Salvador</option>
              </select>
            </div>
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>Seleccione el tipo de venta</option>
                <option value="1">Contado</option>
                <option value="2">Credito</option>
              </select>
            </div>
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>Seleccione el tipo de factura</option>
                <option value="1">Contado</option>
                <option value="2">Credito</option>
              </select>
            </div>
          </form>
          <h2>Moneda</h2>
          <form>
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>Seleccione la moneda</option>
                <option value="1">GTQ</option>
                <option value="2">MXN</option>
                <option value="3">USD</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <div class="row mt-5">
        <h2 class="text-center mb-3">Agregar productos</h2>
        <div class="row mb-3">
          <div class="col-lg-3">
            <button class="btn btn-primary">Agregar producto</button>
          </div>
          <div class="col-lg-9"></div>
        </div>
        <div class="col-lg-12">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">Descripcion</th>
                <th scope="col">Impuestos</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Descuento</th>
                <th scope="col">Tipo</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="row mb-3">
          <div class="col-lg-9"></div>
          <div class="col-lg-3">
            <div>Subtotal: Q.0.00</div>
            <div>Descuento: Q.0.00</div>
            <div>Impuesto IVA: Q.0.00</div>
            <div class="text-black">Total: Q.0.00</div>
          </div>
        </div>
      </div>
      <div class="row pb-5">
        <div class="col-lg-3"></div>
        <div class="col-lg-6 align-content-center">
          <div class="">
            <button class="btn btn-primary">Vista Previa</button>
            <button class="btn btn-primary float-end">Realizar Venta</button>
          </div>
        </div>
        <div class="col-lg-3"></div>
      </div>
    </div>
  );
}

export default Ventas;
