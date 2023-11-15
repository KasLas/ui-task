import DeviceTable from '../../components/DeviceTable';
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
          <DeviceTable devices={devices} />
        </>
      )}
    </>
  );
}

export default HomePage;
