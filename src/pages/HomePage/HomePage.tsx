import { useMemo, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import DeviceListContainer from '../../components/DeviceListContainer';
import ToolBar from '../../components/ToolBar/ToolBar';
import { getDeviceSlice } from '../../features/devices/devicesSelector';
import { useGetDevices } from '../../hooks/useGetDevices';
import { FilterOptions, Line } from '../../utils/types';

function HomePage() {
  const [isList, setIsList] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('');
  useGetDevices();

  const { isLoading, devices, error } = getDeviceSlice();

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

  function handleFilterSelect(event: SelectChangeEvent) {
    setFilterValue(event?.target.value as string);
  }

  const searchDevices = useMemo(() => {
    return searchTerm
      ? devices.filter((device) =>
          device.product.name.toLocaleLowerCase().includes(searchTerm)
        )
      : devices;
  }, [devices, searchTerm]);

  const renderDevices = useMemo(() => {
    return filterValue
      ? searchDevices.filter(
          (device) =>
            device.line.id.toLocaleLowerCase() ===
            filterValue.toLocaleLowerCase()
        )
      : searchDevices;
  }, [filterValue, searchDevices]);

  const filterOptions: FilterOptions[] = useMemo(() => {
    const options = new Set();
    devices.forEach((device) => {
      options.add(JSON.stringify(device.line));
    });
    const optArr: string[] = Array.from(options) as string[];

    const opt = optArr.map((opt) => {
      const obj: Line = JSON.parse(opt);
      return { value: obj.id, name: obj.name };
    });
    return [{ value: '', name: 'All Devices' }, ...opt];
  }, [devices]);

  if (error) {
    return <h3>Something went horribly wrong</h3>;
  }

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
            filterOptions={filterOptions}
            onFilterChange={handleFilterSelect}
            filterValue={filterValue}
          />
          <DeviceListContainer devices={renderDevices} isList={isList} />
        </>
      )}
    </>
  );
}

export default HomePage;
