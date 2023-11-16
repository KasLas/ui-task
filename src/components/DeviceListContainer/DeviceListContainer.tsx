import React, { useMemo } from 'react';
import { Device } from '../../utils/types';
import * as S from './styles';
import { IMG_BASE_URL } from '../../utils/constants';
import DeviceList from '../DeviceList';
import DeviceGrid from '../DeviceGrid';

export interface DeviceListProps {
  devices: Device[];
  isList: boolean;
}

const DeviceListContainer: React.FC<DeviceListProps> = ({
  devices,
  isList,
}) => {
  const listData = useMemo(() => {
    return devices.map((device) => {
      const smallIconDimensions = isList
        ? device.icon.resolutions[0]
        : device.icon.resolutions[4];
      return {
        id: device.id,
        img: `${IMG_BASE_URL}${device.icon.id}_${smallIconDimensions[0]}x${smallIconDimensions[1]}.png`,
        productLine: device.line.name,
        name: device.product.name,
      };
    });
  }, [devices, isList]);

  return (
    <S.TableWrapper>
      {isList ? (
        <DeviceList listData={listData} />
      ) : (
        <DeviceGrid gridData={listData} />
      )}
    </S.TableWrapper>
  );
};

export default DeviceListContainer;
