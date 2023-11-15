import { AppUseDispatch } from '../../app/hooks';
import { getDevices } from '../../features/devices/devicesSlice';

export function dispatchGetTransitions() {
  const dispatch = AppUseDispatch();
  return () => dispatch(getDevices());
}
