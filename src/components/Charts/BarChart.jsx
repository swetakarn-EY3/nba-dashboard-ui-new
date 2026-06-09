import { Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ title, data, options = {} }) {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        max: 100,
      },
      y: {
        stacked: true,
      },
    },
    ...options,
  };

  return (
    <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
      <Bar data={data} options={defaultOptions} />
    </Box>
  );
}
