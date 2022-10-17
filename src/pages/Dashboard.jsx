import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Card from "../components/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
];

const values = [
  10000, 9909, 9300, 16200, 14550.25, 10250.25, 7990.5, 9260, 7540, 8380.0,
];

const gastos = [10250.25, 7990.5, 9260]; //cambiar

const otros = [8380.0, 10000, 9909, 7540]; //cambiar

const data = {
  labels,
  datasets: [
    {
      label: "Ingresos Mensuales: ",
      backgroundColor: "green",
      data: values,
    },
    {
      label: "Gastos Mensuales: ",
      backgroundColor: "red",
      data: gastos,
    },
    {
      label: "Otros: ",
      backgroundColor: "grey",
      data: otros,
    },
  ],
};

function Dashboard() {
  const cards = [
    //corregir con datos correctos
    {
      title: "838",
      subtitle: "Ventas de mes",
      button: "Ir a ventas",
      color: "danger",
    },
    {
      title: "838",
      subtitle: "Ventas de mes",
      button: "Ir a ventas",
      color: "success",
    },
    {
      title: "838",
      subtitle: "Ventas de mes",
      button: "Ir a ventas",
      color: "warning",
    },
    {
      title: "838",
      subtitle: "Ventas de mes",
      button: "Ir a ventas",
      color: "info",
    },
  ];

  return (
    <>
      <h1>Estadisticas</h1>
      <div className="row">
        {cards.map((card, index) => {
          return <Card data={card} key={index}></Card>;
        })}
      </div>
      <div className="finanzas h-50 mt-5">
        <h1>Finanzas Mensuales</h1>
        <div className="h-100 w-100">
          <Bar options={options} data={data}></Bar>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
