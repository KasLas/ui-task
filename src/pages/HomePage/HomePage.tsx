import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ToolBar from '../../components/ToolBar/ToolBar';

function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/product/123');
  };

  return (
    <>
      <ToolBar />
      <Button variant="contained" onClick={handleClick}>
        click
      </Button>
    </>
  );
}

export default HomePage;
