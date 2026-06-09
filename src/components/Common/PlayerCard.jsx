import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { formatNumber } from '../../utils/helpers';

export default function PlayerCard({ player }) {
  return (
    <Card
      sx={{
        background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
        border: '1px solid #90caf9',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transform: 'translateY(-4px)',
        },
        transition: 'all 0.2s ease',
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: '#1976d2', mb: 0.5 }}
        >
          {player.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: '#666',
            textTransform: 'uppercase',
            fontWeight: 600,
            mb: 2,
          }}
        >
          {player.team}
        </Typography>

        <Stack direction="row" justifyContent="space-around" spacing={1}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#999', fontWeight: 700 }}>
              PPG
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 700, color: '#1976d2', mt: 0.5 }}
            >
              {formatNumber(player.ppg)}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#999', fontWeight: 700 }}>
              REB
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 700, color: '#1976d2', mt: 0.5 }}
            >
              {formatNumber(player.rebounds)}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#999', fontWeight: 700 }}>
              AST
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 700, color: '#1976d2', mt: 0.5 }}
            >
              {formatNumber(player.assists)}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
