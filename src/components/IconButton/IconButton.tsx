import React from 'react';
import gridView from '../../assets/gridView.svg';
import listView from '../../assets/listView.svg';
import backArrow from '../../assets/Back-icon.svg';
import * as S from './styles';

interface IconButtonProps {
  variant: 'list' | 'grid' | 'back';
  onClick: () => void;
}

type IconsType = {
  list: string;
  grid: string;
  back: string;
};

const icons: IconsType = {
  list: listView,
  grid: gridView,
  back: backArrow,
};

const IconButton: React.FC<IconButtonProps> = ({ variant, onClick }) => {
  return (
    <S.ButtonWrapper onClick={onClick}>
      <img src={icons[variant as keyof IconsType]} alt="icon button" />
    </S.ButtonWrapper>
  );
};

export default IconButton;
