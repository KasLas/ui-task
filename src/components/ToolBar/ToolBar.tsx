import React from 'react';
import { HStack } from '@chakra-ui/react';
import Select from '../Select';
import { FilterOptions } from '../../utils/types';
import Search from '../Search/Search';
import LayoutSwitch from '../LayoutSwitch';

interface ToolBarProps {
  handleSearchInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  filterOptions: FilterOptions[];
  onFilterChange: (event: any) => void;
  handleSearchClear: () => void;
  searchTerm: string;
}

const ToolBar: React.FC<ToolBarProps> = ({
  handleSearchInput,
  filterOptions,
  onFilterChange,
  handleSearchClear,
  searchTerm,
}) => {
  return (
    <HStack
      justifyContent={'space-between'}
      p={'8px 30px'}
      borderBottom={'solid'}
      borderBottomColor={'neutral3'}
      borderBottomWidth={'1px'}
    >
      <Search
        onChange={handleSearchInput}
        onCloseClick={handleSearchClear}
        value={searchTerm}
      />
      <HStack gap={4}>
        <LayoutSwitch />
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
