import { useNavigate, useParams } from 'react-router-dom';
import { getDevices } from '../../features/devices/devicesSelector';
import { useGetDevices } from '../../hooks/useGetDevices';
import TopBar from '../../components/TopBar';
import DeviceDescriptionCard from '../../components/DeviceDescriptionCard';

function ProductDetailsPage() {
  const navigate = useNavigate();
  useGetDevices();
  const devices = getDevices();
  const { deviceid } = useParams();

  const device = devices.find((device) => device.id === deviceid);

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
