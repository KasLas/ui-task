import React from 'react';
import { Device } from '../../utils/types';
import { IMG_BASE_URL } from '../../utils/constants';
import * as S from './styles';

interface DeviceDetailsProps {
  device: Device;
}

const DeviceDetailsCard: React.FC<DeviceDetailsProps> = ({ device }) => {
  const largeIconDimensions = device?.icon.resolutions[4];
  const imgUrl = `${IMG_BASE_URL}${device.icon.id}_${largeIconDimensions[0]}x${largeIconDimensions[1]}.png`;
  return (
    <S.CardContainer>
      <img src={imgUrl} alt="device picture" />
      <S.Right>
        <S.DetailsLine>
          <p>Product Line</p>
          <p>{device.line.name}</p>
        </S.DetailsLine>
        <S.DetailsLine>
          <p>ID</p>
          <p>{device.line.id}</p>
        </S.DetailsLine>
        <S.DetailsLine>
          <p>Name</p>
          <p>{device.product.name}</p>
        </S.DetailsLine>
        <S.DetailsLine>
          <p>Short Name</p>
          <p>{device.product.abbrev}</p>
        </S.DetailsLine>
      </S.Right>
    </S.CardContainer>
  );
};

export default DeviceDetailsCard;
