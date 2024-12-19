'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js';

// Registering necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ['Bank 1', 'Bank 2 ', 'Bank 3'],
    datasets: [
      {
        label: 'Banks',
        data: [1347, 2747, 1242],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: '60%',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
