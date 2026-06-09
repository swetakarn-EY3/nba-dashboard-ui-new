import { Box } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ data, options = {} }) {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    ...options,
  };

  return (
    <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
      <Doughnut data={data} options={defaultOptions} />
    </Box>
  );
}
