import { Card, CardContent, Box, Typography, Stack } from '@mui/material';

export default function StatCard({ icon: Icon, label, value, color = 'primary' }) {
  const colorMap = {
    primary: { bg: '#e3f2fd', text: '#1976d2', icon: '#bbdefb' },
    success: { bg: '#e8f5e9', text: '#388e3c', icon: '#c8e6c9' },
    warning: { bg: '#fff3e0', text: '#f57c00', icon: '#ffe0b2' },
    error: { bg: '#ffebee', text: '#d32f2f', icon: '#ffcdd2' },
  };

  const colors = colorMap[color] || colorMap.primary;

  return (
    <Card
      sx={{
        backgroundColor: colors.bg,
        border: `1px solid ${colors.icon}`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.2s ease',
      }}
    >
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" sx={{ color: '#666', fontWeight: 600, mb: 1 }}>
              {label}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, color: colors.text }}
            >
              {value}
            </Typography>
          </Box>
          {Icon && (
            <Box
              sx={{
                p: 1.5,
                backgroundColor: colors.icon,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon sx={{ color: colors.text, fontSize: 28 }} />
            </Box>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
