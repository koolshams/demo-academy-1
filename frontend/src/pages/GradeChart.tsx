import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GradeChart: React.FC<{ chartData: Array<{ label: string; value: number }> }> = ({ chartData = [] }) => {
  const data = {
    labels: chartData.map((d) => d.label),
    datasets: [
      {
        label: 'Grade per subject',
        data: chartData.map((d) => d.value),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options}/>;
};

export default GradeChart;
