import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LogoIcon from './components/LogoIcon/LogoIcon';

function App() {
  return (
    <>
      <Header />
      <LogoIcon />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='device/:deviceid' element={<ProductDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
