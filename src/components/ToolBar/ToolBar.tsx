import React from 'react';
import { HStack } from '@chakra-ui/react';
import Select from '../Select';
import { FilterOptions } from '../../utils/types';
import Search from '../Search/Search';
import LayoutSwitch from '../LayoutSwitch';

interface ToolBarProps {
  layoutToggle: (select: string) => void;
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
  layoutToggle,
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
        <LayoutSwitch layoutToggle={layoutToggle} />
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
