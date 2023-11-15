import React from 'react';
import { useGetDevices } from '../../hooks/useGetDevices';

function ProductDetailsPage() {
  useGetDevices();
  return <div>ProductDetailPage</div>;
}

export default ProductDetailsPage;
