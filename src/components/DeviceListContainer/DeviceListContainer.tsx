import React, { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import DeviceList from '../DeviceList';
import DeviceGrid from '../DeviceGrid';
import { Device } from '../../utils/types';
import { IMG_BASE_URL } from '../../utils/constants';
import { getImgDimensions } from './utils';
import { IMG_DIMENSIONS } from '../../utils/constants';

export interface DeviceListProps {
  devices?: Device[];
  layout: string;
}

const DeviceListContainer: React.FC<DeviceListProps> = ({
  devices,
  layout,
}) => {
  const listData = useMemo(() => {
    return devices?.map((device) => {
      const imgResolution =
        layout === 'list'
          ? getImgDimensions(device.icon.resolutions, IMG_DIMENSIONS.sm)
          : getImgDimensions(device.icon.resolutions, IMG_DIMENSIONS.md);
      return {
        id: device.id,
        img: `${IMG_BASE_URL}${device.icon.id}_${imgResolution.x}x${imgResolution.y}.png`,
        productLine: device.line.name,
        name: device.product.name,
      };
    });
  }, [devices, layout]);

  return (
    <Box p={'23px 24px 80px 80px'}>
      {layout === 'list' ? (
        <DeviceList listData={listData} />
      ) : (
        <DeviceGrid gridData={listData} />
      )}
    </Box>
  );
};

export default DeviceListContainer;
