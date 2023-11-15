import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
