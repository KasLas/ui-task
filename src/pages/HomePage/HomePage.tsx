import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Spinner, Center, Alert, AlertIcon } from '@chakra-ui/react';
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
  const [searchparams] = useSearchParams();
  const layout = searchparams.get('view');
  const filter = searchparams.get('filter');
  const [searchTerm, setSearchTerm] = useState('');

  const filterValue = filter ? filter.split(',') : [];

  function handleSearchInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSearchTerm(e.target.value.toLocaleLowerCase());
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
    return filterValue.length > 0
      ? searchDevices?.filter((device) =>
          filterValue.includes(device.line.id.toLocaleLowerCase())
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
    return opt;
  }, [data?.devices]);

  if (status === 'error') {
    return (
      <Alert status='error'>
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  }

  if (status === 'pending') {
    return (
      <Center mt={'200px'}>
        <Spinner size={'xl'} thickness='4px' color='neutral8' />
      </Center>
    );
  }

  return (
    <>
      {status === 'success' && data?.devices ? (
        <>
          <ToolBar
            handleSearchInput={handleSearchInput}
            filterOptions={filterOptions}
            handleSearchClear={handleSearchClear}
            searchTerm={searchTerm}
          />
          <DeviceListContainer
            devices={renderDevices}
            layout={layout ? layout : 'list'}
          />
        </>
      ) : null}
    </>
  );
}

export default HomePage;
