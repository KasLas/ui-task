import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeviceCard from '../DeviceCard';
import { ListItem } from '../DeviceList/DeviceList';
import * as S from './styles';

interface DeviceGridProps {
  gridData?: ListItem[];
}

const DeviceGrid: React.FC<DeviceGridProps> = ({ gridData }) => {
  const navigate = useNavigate();

  function handleCardClick(id: string) {
    navigate(`/device/${id}`);
  }

  return (
    <S.GridContainer>
      {gridData?.map((item) => {
        return (
          <DeviceCard
            key={item.id}
            item={item}
            onClickHandler={handleCardClick}
          />
        );
      })}
    </S.GridContainer>
  );
};

export default DeviceGrid;
