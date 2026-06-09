import { Box } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ title, data, options = {} }) {
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
      <Pie data={data} options={defaultOptions} />
    </Box>
  );
}
