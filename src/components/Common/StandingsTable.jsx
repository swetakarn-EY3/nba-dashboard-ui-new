import { Typography, Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export default function StandingsTable({ data, title }) {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 2,
          pb: 1.5,
          borderBottom: '2px solid #e0e0e0',
        }}
      >
        {title}
      </Typography>
      <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell
                sx={{ fontWeight: 700, color: '#666', backgroundColor: '#f5f5f5' }}
              >
                Rank
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, color: '#666', backgroundColor: '#f5f5f5' }}
              >
                Team
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, color: '#666', backgroundColor: '#f5f5f5' }}
                align="center"
              >
                W
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, color: '#666', backgroundColor: '#f5f5f5' }}
                align="center"
              >
                L
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((entry) => (
              <TableRow
                key={entry.rank}
                sx={{
                  backgroundColor: entry.rank === 1 ? '#e8f5e9' : 'transparent',
                  '&:hover': { backgroundColor: '#fafafa' },
                  borderBottom: '1px solid #e0e0e0',
                }}
              >
                <TableCell sx={{ fontWeight: 600, color: '#333' }}>
                  {entry.rank}
                </TableCell>
                <TableCell sx={{ fontWeight: 500, color: '#333' }}>
                  {entry.team}
                </TableCell>
                <TableCell align="center" sx={{ color: '#666' }}>
                  {entry.wins}
                </TableCell>
                <TableCell align="center" sx={{ color: '#666' }}>
                  {entry.losses}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
