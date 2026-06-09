import { FormControl, Select, MenuItem } from '@mui/material';

export default function SelectField({ 
  value, 
  onChange, 
  options = [], 
  placeholder = 'Select',
  size = 'small',
  sx = {}
}) {
  return (
    <FormControl sx={{ minWidth: 140, ...sx }} size={size}>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
      >
        <MenuItem value="">{placeholder}</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
