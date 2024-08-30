import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import shopcart from './shoppingcart.png'; 

const CartButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      className='overlay-button'
      variant="contained"
      onClick={() => navigate('/shortnsweet')}
      size="small"
      sx={{
        color: '#fff',
        width: '40px', 
        height: '40px', 
        minWidth: '40px', 
        padding: 0,
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'top',
        '&:hover': {
          backgroundColor: '#234c9b',
          color: '#fff',
        },
      }}
    >
      <img 
        src={shopcart} 
        alt="Shopping Cart" 
        style={{ width: '20px', height: '20px' }} 
      />
    </Button>
  );
}

export default CartButton;
