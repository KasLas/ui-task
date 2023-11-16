import React from 'react';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import MuSelect, { SelectChangeEvent } from '@mui/material/Select';
import { FilterOptions } from '../../utils/types';

interface SelectOptions {
  filterOptions: FilterOptions[];
  onChange: (event: SelectChangeEvent) => void;
  value: string;
}

const Select: React.FC<SelectOptions> = ({
  filterOptions,
  onChange,
  value,
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <MuSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Filter"
          onChange={onChange}
        >
          {filterOptions.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem>
            );
          })}
        </MuSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
