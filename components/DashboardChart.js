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

function generateRandom() {
  const min = 0;
  const max = 5;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: "top",
    // },
    legend: false,
  },
  scales: {
    // yAxes: {
    //   grid: {
    //     borderColor: "#eeeeee",
    //     color: "#eeeeee",
    //     tickColor: "#eeeeee",
    //   },
    // },
    xAxes: {
      grid: {
        // borderColor: "#eeeeee",
        color: "#eeeeee",
      },
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const data = {
  labels,
  borderColor: "#ffffff",
  datasets: [
    {
      // label: "Dataset 1",
      data: labels.map((a) => generateRandom()),
      borderColor: "#DEA34B",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      // radius: 6,
      lineTension: 0.5,
      radius: 4,
    },
    {
      // label: "Dataset 2",
      data: labels.map((a) => generateRandom()),
      borderColor: "#AE2EEA",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      lineTension: 0.5,
      radius: 4,
    },
  ],
};

export function DashboardChart() {
  return <Line options={options} data={data} />;
}
