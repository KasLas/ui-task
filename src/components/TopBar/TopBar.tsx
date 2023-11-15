import React from 'react';
import * as S from './styles';
import IconButton from '../IconButton';

interface TopBarProps {
  title: string;
  backClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ title, backClick }) => {
  return (
    <S.TopBarContainer>
      <IconButton variant="back" onClick={backClick} />
      <S.TitleWrapper>{title}</S.TitleWrapper>
    </S.TopBarContainer>
  );
};

export default TopBar;
