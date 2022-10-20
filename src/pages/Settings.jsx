import SecurityItem from "../components/SecurityItem";
import "../css/Settings.css";
const options = [
  //!modificar opciones!
  {
    title: "Monitorear actividad sospechosa",
    subtitle: "Activar la monitorizacion de actividad sospechosa",
  },
  {
    title: "Monitorear actividad sospechosa",
    subtitle: "Activar la monitorizacion de actividad sospechosa",
  },
  {
    title: "Monitorear actividad sospechosa",
    subtitle: "Activar la monitorizacion de actividad sospechosa",
  },
  {
    title: "Monitorear actividad sospechosa",
    subtitle: "Activar la monitorizacion de actividad sospechosa",
  },
  {
    title: "Monitorear actividad sospechosa",
    subtitle: "Activar la monitorizacion de actividad sospechosa",
  },
  {
    title: "Monitorear actividad sospechosa",
    subtitle: "Activar la monitorizacion de actividad sospechosa",
  },
];

function Settings() {
  return (
    <div class="row justify-content-center">
      <h2 class="text-center mb-3">Configuracion</h2>{" "}
      <div class="col-12">
        <div class="my-4">
          <strong class="mb-0">Seguridad</strong>
          <p>Controles relacionados a la seguridad.</p>
          <div class="list-group mb-5 shadow">
            {options.map((option, index) => {
              return <SecurityItem data={option} index={index}></SecurityItem>;
            })}
          </div>
          <p>Controles relacionados a la seguridad.</p>
          <div class="list-group mb-5 shadow">
            {options.map((option, index) => {
              return <SecurityItem data={option} index={index}></SecurityItem>;
            })}
          </div>
          <h5 class="mb-0">Recent Activity</h5>
          <p>Last activities with your account.</p>
          <table class="table border bg-white">
            <thead>
              <tr>
                <th>Device</th>
                <th>Location</th>
                <th>IP</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">
                  <i class="fe fe-globe fe-12 text-muted mr-2"></i>Chrome -
                  Windows 10
                </th>
                <td>Poptún, Guatemala</td>
                <td>192.168.1.10</td>
                <td>Octubre 20, 2022</td>
                <td>
                  <a hreff="#" class="text-muted">
                    <i class="fe fe-x"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Settings;
