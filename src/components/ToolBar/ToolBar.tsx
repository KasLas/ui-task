import IconButton from '../IconButton';
import * as S from './styles';
import Search from '../Search';
import Select from '../Select';
import React from 'react';
import { FilterOptions } from '../../utils/types';
import { SelectChangeEvent } from '@mui/material';

interface ToolBarProps {
  listClick: () => void;
  gridClick: () => void;
  handleSearchInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  filterOptions: FilterOptions[];
  onFilterChange: (event: SelectChangeEvent) => void;
  filterValue: string;
}

const ToolBar: React.FC<ToolBarProps> = ({
  listClick,
  gridClick,
  handleSearchInput,
  filterOptions,
  onFilterChange,
  filterValue,
}) => {
  return (
    <S.ToolBarWrapper>
      <Search onChange={handleSearchInput} />
      <S.Right>
        <IconButton variant="list" onClick={listClick} />
        <IconButton variant="grid" onClick={gridClick} />
        <Select
          filterOptions={filterOptions}
          onChange={onFilterChange}
          value={filterValue}
        />
      </S.Right>
    </S.ToolBarWrapper>
  );
};

export default ToolBar;
