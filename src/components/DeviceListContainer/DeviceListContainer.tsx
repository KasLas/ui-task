import React, { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { Device } from '../../utils/types';
import { IMG_BASE_URL } from '../../utils/constants';
import DeviceList from '../DeviceList';
import DeviceGrid from '../DeviceGrid';

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
      const smallIconDimensions =
        layout === 'list'
          ? device.icon.resolutions[0]
          : device.icon.resolutions[4];
      return {
        id: device.id,
        img: `${IMG_BASE_URL}${device.icon.id}_${smallIconDimensions[0]}x${smallIconDimensions[1]}.png`,
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
