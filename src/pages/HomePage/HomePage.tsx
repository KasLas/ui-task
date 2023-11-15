import { useState } from 'react';
import DeviceListContainer from '../../components/DeviceListContainer';
import ToolBar from '../../components/ToolBar/ToolBar';
import { getDeviceSlice } from '../../features/devices/devicesSelector';
import { useGetDevices } from '../../hooks/useGetDevices';

function HomePage() {
  const [isList, setIsList] = useState(true);
  useGetDevices();

  const { isLoading, devices } = getDeviceSlice();

  function switchToList() {
    setIsList(true);
  }

  function switchToGrid() {
    setIsList(false);
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ToolBar gridClick={switchToGrid} listClick={switchToList} />
          <DeviceListContainer devices={devices} isList={isList} />
        </>
      )}
    </>
  );
}

export default HomePage;
