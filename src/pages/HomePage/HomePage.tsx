import { useState } from 'react';
import DeviceListContainer from '../../components/DeviceListContainer';
import ToolBar from '../../components/ToolBar/ToolBar';
import { getDeviceSlice } from '../../features/devices/devicesSelector';
import { useGetDevices } from '../../hooks/useGetDevices';

function HomePage() {
  const [isList, setIsList] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  useGetDevices();

  const { isLoading, devices } = getDeviceSlice();

  function switchToList() {
    setIsList(true);
  }

  function switchToGrid() {
    setIsList(false);
  }

  function handleSearchInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSearchTerm(e.target.value.toLocaleLowerCase());
  }

  const renderDevices = searchTerm
    ? devices.filter((device) =>
        device.product.name.toLocaleLowerCase().includes(searchTerm)
      )
    : devices;

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ToolBar
            gridClick={switchToGrid}
            listClick={switchToList}
            handleSearchInput={handleSearchInput}
          />
          <DeviceListContainer devices={renderDevices} isList={isList} />
        </>
      )}
    </>
  );
}

export default HomePage;
