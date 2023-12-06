import React from 'react';
import {
  HStack,
  VStack,
  Image,
  Text,
  Skeleton,
  Grid,
  GridItem,
} from '@chakra-ui/react';
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
    <Grid
      gridTemplateColumns={'256px 1fr'}
      minH={'256px'}
      w={'688px'}
      m={'206px auto 0 auto'}
      gap={'32px'}
    >
      <GridItem>
        <Image
          h={'257px'}
          w={'257px'}
          src={imgUrl}
          alt='device image'
          objectFit='cover'
          fallback={<Skeleton h={'257px'} w={'257px'} />}
        />
      </GridItem>
      <GridItem>
        <VStack w={'full'} gap={'0'} h={'full'} justifyContent={'center'}>
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
      </GridItem>
    </Grid>
  );
};

export default DeviceDetailsCard;
