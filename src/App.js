import { Routes, Route, Link } from "react-router-dom";
import MenuSidebar from "./components/MenuSidebar";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import Employees from "./pages/Employees";
import Clients from "./pages/Clients";
import Warehouse from "./pages/Warehouse";
import Departments from "./pages/Departments";

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
        </Routes>
      </div>
    </main>
  );
}

export default App;
