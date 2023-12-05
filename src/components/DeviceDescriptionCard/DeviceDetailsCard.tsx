import React from 'react';
import { HStack, VStack, Image } from '@chakra-ui/react';
import { Device } from '../../utils/types';
import { IMG_BASE_URL, IMG_DIMENSIONS } from '../../utils/constants';
import * as S from './styles';
import { getImgDimensions } from '../DeviceListContainer/utils';
import { getDeviceDescription, neededDescription } from './utils';

interface DeviceDetailsProps {
  device: Device;
}

const DeviceDetailsCard: React.FC<DeviceDetailsProps> = ({ device }) => {
  const resolution = getImgDimensions(
    device.icon.resolutions,
    IMG_DIMENSIONS.xl
  );

  const imgUrl = `${IMG_BASE_URL}${device.icon.id}_${resolution.x}x${resolution.y}.png`;

  const renderDescription = getDeviceDescription(device, neededDescription);

  return (
    <HStack minH={'256px'} w={'688px'} m={'206px auto 0 auto'} gap={'32px'}>
      <Image src={imgUrl} alt='device image' objectFit='cover' />
      <VStack w={'full'}>
        {renderDescription.map((descriptionLine, i) => {
          return (
            <S.DetailsLine key={i}>
              <p>{descriptionLine.title}</p>
              <p>{descriptionLine.value}</p>
            </S.DetailsLine>
          );
        })}
      </VStack>
    </HStack>
  );
};

export default DeviceDetailsCard;
