import React from 'react';
import { HStack, VStack, Image, Text } from '@chakra-ui/react';
import { Device } from '../../utils/types';
import { IMG_BASE_URL, IMG_DIMENSIONS } from '../../utils/constants';
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
      <VStack w={'full'} gap={'0'}>
        {renderDescription.map((descriptionLine, i) => {
          return (
            <HStack
              p={'2px 0 2px 0'}
              w={'full'}
              borderBottom={'solid 1px'}
              borderBottomColor={'neutral3'}
              justifyContent={'space-between'}
              key={i}
            >
              <Text>{descriptionLine.title}</Text>
              <Text>{descriptionLine.value}</Text>
            </HStack>
          );
        })}
      </VStack>
    </HStack>
  );
};

export default DeviceDetailsCard;
