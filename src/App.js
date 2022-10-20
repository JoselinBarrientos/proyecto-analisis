import { Routes, Route, Link } from "react-router-dom";
import MenuSidebar from "./components/MenuSidebar";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import Employees from "./pages/Employees";
import Clients from "./pages/Clients";
import Warehouse from "./pages/Warehouse";
import Departments from "./pages/Departments";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Payroll from "./pages/Payroll";
import Production from "./pages/Production";
import Inventories from "./pages/Inventories";

function App() {
  return (
    <main
      className="d-flex fex-nowrap"
      style={{ maxHeight: "100vh", overflowY: "hidden" }}
    >
      <MenuSidebar></MenuSidebar>
      <div className={"p-4 w-100 overflow-auto"}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ventas" element={<Sales></Sales>} />
          <Route path="/empleados" element={<Employees></Employees>} />
          <Route path="/clientes" element={<Clients></Clients>} />
          <Route path="/almacen" element={<Warehouse></Warehouse>} />
          <Route path="/departamentos" element={<Departments></Departments>} />
          <Route path="/reportes" element={<Reports></Reports>} />
          <Route path="/planilla" element={<Payroll></Payroll>} />
          <Route path="/produccion" element={<Production></Production>} />
          <Route path="/inventarios" element={<Inventories></Inventories>} />
          <Route path="/configuracion" element={<Settings></Settings>} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
