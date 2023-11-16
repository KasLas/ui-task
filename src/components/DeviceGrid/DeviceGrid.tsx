import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItem } from '../DeviceList/DeviceList';
import * as S from './styles';

interface DeviceGridProps {
  gridData: ListItem[];
}

const DeviceGrid: React.FC<DeviceGridProps> = ({ gridData }) => {
  const navigate = useNavigate();

  function handleCardClick(id: string) {
    navigate(`/device/${id}`);
  }

  return (
    <S.GridContainer>
      {gridData.map((item) => {
        return (
          <S.ContentWrapper
            key={item.id}
            onClick={() => {
              handleCardClick(item.id);
            }}
          >
            <S.ImgWrapper>
              <img src={item.img} alt="product image" />
            </S.ImgWrapper>
            <S.TextWrapper>
              <h4> {item.name}</h4>
              <p>{item.productLine}</p>
            </S.TextWrapper>
          </S.ContentWrapper>
        );
      })}
    </S.GridContainer>
  );
};

export default DeviceGrid;
