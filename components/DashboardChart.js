import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  borderColor: function (context, options) {
    const color = options.color; // resolve the value of another scriptable option: 'red', 'blue' or 'green'
    return Chart.helpers.color(color).lighten(0.8);
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  color: "#eeeeee",
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map((a) => a.length),
      borderColor: "#DEA34B",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map((a) => a.length + 3),
      borderColor: "#AE2EEA",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function DashboardChart() {
  return <Line options={options} data={data} />;
}
