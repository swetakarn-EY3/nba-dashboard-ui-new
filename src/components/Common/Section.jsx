import { Box, Typography, Button, Card, CardContent } from '@mui/material';

export default function Section({ title, children, showMore = false, onShowMore }) {
  return (
    <Card
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderRadius: 2,
        mb: 3,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
            {title}
          </Typography>
          {showMore && (
            <Button
              size="small"
              sx={{ color: '#1976d2', fontWeight: 600 }}
              onClick={onShowMore}
            >
              Show all
            </Button>
          )}
        </Box>
        {children}
      </CardContent>
    </Card>
  );
}
