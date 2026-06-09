import { Box, Typography, Container } from '@mui/material';
import DashboardHeader from '../components/Common/DashboardHeader';

export default function ComparisonPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="xl" sx={{ flex: 1, py: 4, px: { xs: 2, sm: 3 } }}>
        <DashboardHeader title="Comparison" />
        <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#999' }}>
            Comparison content coming soon...
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
