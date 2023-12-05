import React from 'react';
import { Device } from '../../utils/types';
import { IMG_BASE_URL, IMG_DIMENSIONS } from '../../utils/constants';
import * as S from './styles';
import { getImgDimensions } from '../DeviceListContainer/utils';

interface DeviceDetailsProps {
  device: Device;
}

const DeviceDetailsCard: React.FC<DeviceDetailsProps> = ({ device }) => {
  const resolution = getImgDimensions(
    device.icon.resolutions,
    IMG_DIMENSIONS.xl
  );
  const imgUrl = `${IMG_BASE_URL}${device.icon.id}_${resolution.x}x${resolution.y}.png`;
  return (
    <S.CardContainer>
      <img src={imgUrl} alt='device picture' />
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
