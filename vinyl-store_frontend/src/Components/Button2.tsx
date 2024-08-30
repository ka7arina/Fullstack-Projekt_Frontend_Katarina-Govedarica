import React from 'react';
import { Button } from '@mui/material';
import './Button2.css';
import { useNavigate } from 'react-router-dom';

const ContactButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      className='overlay-button'
      variant="outlined"
      onClick={() => navigate('/shortnsweet')}
      size="large"
      sx={{
        color: '#234c9b',
        marginTop: 57,
        width: '220px',
        '&:hover': {
          backgroundColor: '#234c9b',
          color: '#fff',
        },
      }}
    >
Contact
    </Button>
  );
}

export default ContactButton;
