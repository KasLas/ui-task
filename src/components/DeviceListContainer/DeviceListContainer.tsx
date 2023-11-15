import React, { useMemo } from 'react';
import { Device } from '../../utils/types';
import * as S from './styles';
import { IMG_BASE_URL } from '../../utils/constants';
import DeviceList from '../DeviceList';

export interface DeviceListProps {
  devices: Device[];
}

const DeviceListContainer: React.FC<DeviceListProps> = ({ devices }) => {
  const listData = useMemo(() => {
    return devices.map((device) => {
      const smallIconDimensions = device.icon.resolutions[1];
      return {
        id: device.id,
        img: `${IMG_BASE_URL}${device.icon.id}_${smallIconDimensions[0]}x${smallIconDimensions[1]}.png`,
        productLine: device.line.name,
        name: device.product.name,
      };
    });
  }, [devices]);

  return (
    <S.TableWrapper>
      <DeviceList listData={listData} />
    </S.TableWrapper>
  );
};

export default DeviceListContainer;
