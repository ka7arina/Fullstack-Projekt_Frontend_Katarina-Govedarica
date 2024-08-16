import React from 'react';
import { Button } from '@mui/material';
import './Buttons.css'

const TheButton: React.FC = () => {
  return (
    <Button
    className='overlay-button'
      variant="contained"
      onClick={() => {
        alert('clicked');
      }}
      size="large"
      sx={{
        backgroundColor: '#e58460',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#ed9d80',
          color: '#fff',
        },
      }}
    >
      Shop The Collection
    </Button>
  );
}

export default TheButton;
