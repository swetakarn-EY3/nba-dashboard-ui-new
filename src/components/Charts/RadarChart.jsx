import { Box } from '@mui/material';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarChart({ title, data, options = {} }) {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      r: {
        beginAtZero: true,
      },
    },
    ...options,
  };

  return (
    <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
      <Radar data={data} options={defaultOptions} />
    </Box>
  );
}
