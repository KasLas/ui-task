import { AppUseSelector } from '../../app/hooks';
import { Device, DevicesSlice } from '../../utils/types';

export function getDeviceSlice(): DevicesSlice {
  return AppUseSelector((state) => state.devices);
}

export function getDevices(): Device[] {
  return AppUseSelector((state) => state.devices.devices);
}

export function getIsLoading(): boolean {
  return AppUseSelector((state) => state.devices.isLoading);
}
