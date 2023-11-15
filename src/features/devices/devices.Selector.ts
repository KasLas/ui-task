import { AppUseSelector } from '../../app/hooks';
import { DevicesSlice } from '../../utils/types';

export function getDeviceSlice(): DevicesSlice {
  return AppUseSelector((state) => state.devices);
}
