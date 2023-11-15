import DeviceListContainer from '../../components/DeviceListContainer';
import ToolBar from '../../components/ToolBar/ToolBar';
import { getDeviceSlice } from '../../features/devices/devicesSelector';
import { useGetDevices } from '../../hooks/useGetDevices';

function HomePage() {
  useGetDevices();

  const { isLoading, devices } = getDeviceSlice();

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ToolBar />
          <DeviceListContainer devices={devices} />
        </>
      )}
    </>
  );
}

export default HomePage;
