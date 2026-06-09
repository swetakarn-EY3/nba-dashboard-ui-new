import { Box, Typography, Avatar } from '@mui/material';

export default function Header({ title = 'NBA Dashboard', showProfile = true }) {
  return (
    <Box
      sx={{
        backgroundColor: '#dde5e5ec',
        color: 'white',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>
        {title}
      </Typography>

      {showProfile && (
        <Avatar
          sx={{
            width: 40,
            height: 40,
            backgroundColor: '#ff6b6b',
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.9,
            },
          }}
        >
          U anjan
        </Avatar>
      )}
    </Box>
  );
}
