import { Card, CardContent } from '@mui/material';

export default function CardComponent({ children, className = '', hover = true }) {
  return (
    <Card
      sx={{
        backgroundColor: 'white',
        border: '1px solid #e0e0e0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderRadius: 2,
        '&:hover': hover ? {
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transform: 'translateY(-2px)',
        } : {},
        transition: 'all 0.2s ease',
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
}
