import { Bar } from "react-chartjs-2";
import React from "react";
import { Chart as ChartJs } from "chart.js/auto";

export default function BarChart(chartData) {
    return <Bar data={chartData} />;
}
