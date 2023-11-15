import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

// Data
// https://static.ui.com/fingerprint/ui/public.json

// images
// Image urls can be constructed using the device ID and resolutions - e.g.
// https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-
// 13236866ea3d_257x257.png

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
