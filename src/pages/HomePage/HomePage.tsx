import { useMemo, useState } from 'react';
import DeviceListContainer from '../../components/DeviceListContainer';
import ToolBar from '../../components/ToolBar/ToolBar';
import { QueryDeviceData, FilterOptions, Line } from '../../utils/types';

function HomePage({
  data,
  status,
}: {
  data?: QueryDeviceData;
  status: string;
}) {
  const [layout, setLayout] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('');

  function layoutToggle(select: string) {
    setLayout(select);
  }

  function handleSearchInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSearchTerm(e.target.value.toLocaleLowerCase());
  }

  function handleFilterSelect(event: any) {
    setFilterValue(event?.target.value as string);
  }

  function handleSearchClear() {
    setSearchTerm('');
  }

  const searchDevices = useMemo(() => {
    return searchTerm
      ? data?.devices.filter((device) =>
          device.product.name.toLocaleLowerCase().includes(searchTerm)
        )
      : data?.devices;
  }, [data?.devices, searchTerm]);

  const renderDevices = useMemo(() => {
    return filterValue
      ? searchDevices?.filter(
          (device) =>
            device.line.id.toLocaleLowerCase() ===
            filterValue.toLocaleLowerCase()
        )
      : searchDevices;
  }, [filterValue, searchDevices]);

  const filterOptions: FilterOptions[] = useMemo(() => {
    const options = new Set();
    data?.devices.forEach((device) => {
      options.add(JSON.stringify(device.line));
    });
    const optArr: string[] = Array.from(options) as string[];

    const opt = optArr.map((opt) => {
      const obj: Line = JSON.parse(opt);
      return { value: obj.id, name: obj.name };
    });
    return [{ value: 'all', name: 'All Devices' }, ...opt];
  }, [data?.devices]);

  if (status === 'error') {
    return <h3>Something went horribly wrong</h3>;
  }

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  return (
    <>
      {status === 'success' && data?.devices ? (
        <>
          <ToolBar
            layoutToggle={layoutToggle}
            handleSearchInput={handleSearchInput}
            filterOptions={filterOptions}
            onFilterChange={handleFilterSelect}
            filterValue={filterValue}
            handleSearchClear={handleSearchClear}
            searchTerm={searchTerm}
          />
          <DeviceListContainer devices={renderDevices} layout={layout} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default HomePage;
