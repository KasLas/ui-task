import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/product/123');
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        click
      </Button>
    </>
  );
}

export default HomePage;
