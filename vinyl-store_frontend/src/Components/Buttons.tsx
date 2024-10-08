import React from 'react';
import { Button } from '@mui/material';
import './Buttons.css';
import { useNavigate } from 'react-router-dom';

const TheButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      className='overlay-button'
      variant="contained"
      onClick={() => navigate('/shortnsweet')}
      size="large"
      sx={{
        backgroundColor: '#234c9b',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#234c9b',
          color: '#fff',
        },
      }}
    >
      Shop The Collection
    </Button>
  );
}

export default TheButton;
