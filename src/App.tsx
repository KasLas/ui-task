import { Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { QueryDeviceData } from './utils/types';
import { DEVICES_URL } from './utils/constants';
import axios from 'axios';

const getDevices = async () => {
  const response = await axios.get<QueryDeviceData>(DEVICES_URL);
  return response.data;
};

function App() {
  const { data, status } = useQuery({
    queryKey: ['devices'],
    queryFn: getDevices,
  });

  return (
    <Box maxW={'1366px'} mr={'auto'} ml={'auto'}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage data={data} status={status} />} />
        <Route
          path='device/:deviceid'
          element={<ProductDetailsPage data={data} status={status} />}
        />
      </Routes>
    </Box>
  );
}

export default App;
