import { Box, Container } from '@mui/material';

export default function PageLayout({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          flex: 1,
          py: 4,
          px: { xs: 2, sm: 3 },
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
