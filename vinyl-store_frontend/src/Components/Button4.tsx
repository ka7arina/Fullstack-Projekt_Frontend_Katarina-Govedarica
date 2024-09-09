import React from 'react';
import { Button } from '@mui/material';
import './Button4.css';
import { useNavigate } from 'react-router-dom';

const CheckoutButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
    <Button
      className='overlay-button'
      variant="contained"
      disableElevation
      onClick={() => navigate('/checkout')}
      size="large"
      sx={{
        backgroundColor: '#234c9b',
        color: '#fff',
        width: '220px',
        marginTop: 3,
        '&:hover': {
          backgroundColor: '#234c9b',
          color: '#fff',
        },
      }}
    >
Checkout →
    </Button>
    <Button
      className='overlay-button'
      variant="contained"
      disableElevation
      onClick={() => navigate('/cart')}
      size="small"
      sx={{
        backgroundColor: '#234c9b',
        color: '#fff',
        width: '220px',
        marginTop: 0.3,
        '&:hover': {
          backgroundColor: '#234c9b',
          color: '#fff',
        },
      }}
    >
View Cart →
    </Button>
    </div>
  );
}

export default CheckoutButton;
