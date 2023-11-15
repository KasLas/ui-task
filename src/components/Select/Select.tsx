import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import MuSelect, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';

const Select = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <MuSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </MuSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
