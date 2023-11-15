import { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { getDevices } from '../features/devices/devicesSelector';
import { dispatchGetTransitions } from '../features/devices/devicesDispatch';

export function useGetDevices() {
  const fetchDevices = dispatchGetTransitions();
  const devices = getDevices();

  useEffect(() => {
    if (isEmpty(devices)) {
      fetchDevices();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
