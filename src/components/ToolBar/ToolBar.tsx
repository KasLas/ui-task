import IconButton from '../IconButton';
import { HStack, Input, Text } from '@chakra-ui/react';
import Select from '../Select';
import React from 'react';
import { FilterOptions } from '../../utils/types';
// import { SelectChangeEvent } from '@mui/material';
import LogoDefault from '../Icons/LogoDefault';
import Search from '../Search/Search';

interface ToolBarProps {
  listClick: () => void;
  gridClick: () => void;
  handleSearchInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  filterOptions: FilterOptions[];
  onFilterChange: (event: any) => void;
  filterValue: string;
  handleSearchClear: () => void;
  searchTerm: string;
}

const ToolBar: React.FC<ToolBarProps> = ({
  listClick,
  gridClick,
  handleSearchInput,
  filterOptions,
  onFilterChange,
  filterValue,
  handleSearchClear,
  searchTerm,
}) => {
  return (
    <HStack justifyContent={'space-between'} p={'8px 30px'}>
      <Search
        onChange={handleSearchInput}
        onCloseClick={handleSearchClear}
        value={searchTerm}
      />
      <HStack>
        <IconButton variant='list' onClick={listClick} />
        <IconButton variant='grid' onClick={gridClick} />
        <Select
          filterOptions={filterOptions}
          onChange={onFilterChange}
          value='temp'
        />
      </HStack>
    </HStack>
  );
};

export default ToolBar;
