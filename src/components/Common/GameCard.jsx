import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { formatDate } from '../../utils/helpers';

export default function GameCard({ game }) {
  return (
    <Card
      sx={{
        backgroundColor: '#fafafa',
        border: '1px solid #e0e0e0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.2s ease',
      }}
    >
      <CardContent>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="caption" sx={{ color: '#999', fontWeight: 700 }}>
            {formatDate(game.date)}
          </Typography>
        </Box>

        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
          <Box
            sx={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 1,
              p: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" sx={{ color: '#666', fontWeight: 500, mb: 1 }}>
              {game.homeTeam}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2' }}>
              {game.homeScore}
            </Typography>
          </Box>

          <Typography variant="caption" sx={{ color: '#999', fontWeight: 700 }}>
            VS
          </Typography>

          <Box
            sx={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 1,
              p: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" sx={{ color: '#666', fontWeight: 500, mb: 1 }}>
              {game.awayTeam}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2' }}>
              {game.awayScore}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
