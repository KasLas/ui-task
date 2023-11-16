import IconButton from '../IconButton';
import * as S from './styles';
import Search from '../Search';
import Select from '../Select';
import React from 'react';

interface ToolBarProps {
  listClick: () => void;
  gridClick: () => void;
}

const ToolBar: React.FC<ToolBarProps> = ({ listClick, gridClick }) => {
  return (
    <S.ToolBarWrapper>
      <Search />
      <S.Right>
        <IconButton variant="list" onClick={listClick} />
        <IconButton variant="grid" onClick={gridClick} />
        <Select />
      </S.Right>
    </S.ToolBarWrapper>
  );
};

export default ToolBar;
