import { useNavigate, useParams } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import DeviceDescriptionCard from '../../components/DeviceDescriptionCard';
import { QueryDeviceData } from '../../utils/types';

function ProductDetailsPage({
  data,
}: {
  data?: QueryDeviceData;
  status: string;
}) {
  const navigate = useNavigate();

  const { deviceid } = useParams();

  const device = data?.devices.find((device) => device.id === deviceid);

  function handleBackClick() {
    navigate(-1);
  }

  return (
    <>
      {device ? (
        <div>
          <TopBar title={device?.product.name} backClick={handleBackClick} />
          <DeviceDescriptionCard device={device} />
        </div>
      ) : (
        <p>No Item found</p>
      )}
    </>
  );
}

export default ProductDetailsPage;
