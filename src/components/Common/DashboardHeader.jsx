import { Box, Typography, Select, MenuItem, FormControl, Stack } from '@mui/material';

export default function DashboardHeader({ title, filters = [] }) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 2,
        p: 3,
        mb: 3,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={2}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>

        {filters && filters.length > 0 && (
          <Stack direction="row" spacing={2} sx={{ width: { xs: '100%', sm: 'auto' } }}>
            {filters.map((filter, idx) => (
              <FormControl
                key={idx}
                sx={{ minWidth: 120 }}
                size="small"
              >
                <Select
                  defaultValue={filter.value || ''}
                  displayEmpty
                >
                  <MenuItem value="">{filter.label}</MenuItem>
                  {filter.options?.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
