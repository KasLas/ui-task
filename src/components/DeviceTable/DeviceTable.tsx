import React from 'react';
import { Device } from '../../utils/types';

interface DeviceTableProps {
  devices: Device[];
}

const DeviceTable: React.FC<DeviceTableProps> = ({ devices }) => {
  return (
    <div>
      {devices.map((device) => {
        return <div key={device.id}>{device.product.name}</div>;
      })}
    </div>
  );
};

export default DeviceTable;
