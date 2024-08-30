import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Card, CardContent, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AppBar from './Components/AppBar/AppBar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import './VinylDetail.css';
import CheckoutButton from './Components/Button4';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

interface Artist {
  id: number;
  name: string;
}

interface Vinyl {
  id: number;
  title: string;
  artist: Artist;
  releaseYear: number;
  genre: {
    id: number;
    name: string;
  };
  status: {
    id: number;
    name: string;
  };
  price: number;
  imageFilePath: string;
}

const VinylDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vinyl, setVinyl] = useState<Vinyl | null>(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/vinyls/${id}`)
      .then(response => {
        setVinyl(response.data);
      })
      .catch(error => {
        console.error('Error fetching vinyl:', error);
      });
  }, [id]);

  if (!vinyl) {
    return <div>Loading...</div>;
  }

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const DrawerList = (
<Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
  <List>
    <Typography variant="h5" marginTop='10px' marginLeft='15px'>
      View your cart
    </Typography>
          <Box >
        <img 
                  src={`http://localhost:8080/images/${vinyl.imageFilePath.split('/').pop()}`} 
                  alt={`${vinyl.title} cover`} 
                  style={{ marginTop: 50, maxWidth: '75%', height: 'auto', marginLeft: 20}}
                />
          </Box>
          <Box sx={{ justifyContent: 'left', alignItems: 'left', marginLeft: 2.5}}>
                <Typography variant="body1" component="div">
                    {vinyl.title}
                  </Typography>
                  <Typography variant="body2">
                  {vinyl.artist.name}
                  </Typography>
                  <Typography variant="body2" marginTop="5px">
                  {vinyl.price}
                  </Typography>
          </Box>
  </List>
  <Divider />
  <List>
 <CheckoutButton></CheckoutButton>
  </List>
</Box>
  );

  return (
    <div>
      <AppBar />
      <Box sx={{ marginTop: 23, marginLeft: 5 }}>
        <Card sx={{ display: 'flex', width: '75%', margin: 'auto'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                  src={`http://localhost:8080/images/${vinyl.imageFilePath.split('/').pop()}`} 
                  alt={`${vinyl.title} cover`} 
                  style={{ marginTop: 50, marginBottom: 50, maxWidth: '70%', height: 'auto' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent style={{ marginTop: 30 }}>
                <Typography variant="h4" component="div">
                  {vinyl.title}
                </Typography>
                <Box style={{ marginTop: 40 }}>
                  <Typography variant="body1" component="div" gutterBottom>
                    {vinyl.artist.name}
                  </Typography>
                  <Typography variant="body1" component="div" gutterBottom>
                    Release Date: {vinyl.releaseYear}
                  </Typography>
                  <Typography variant="body1" component="div" gutterBottom>
                    Genre: {vinyl.genre.name}
                  </Typography>
                  <Typography variant="body1" component="div" gutterBottom>
                    {vinyl.status.name}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 26 }}>
                  <Typography variant="h5" component="div" sx={{ marginRight: 1 }}>
                    Price: ${vinyl.price}
                  </Typography>
                  <IconButton 
                    color="primary" 
                    aria-label="add to shopping cart" 
                    onClick={() => toggleDrawer(true)}
                    sx={{
                      padding: 0,
                      height: 'auto',
                      alignItems: 'center',
                      display: 'flex',
                      color: '#234c9b',
                    }}
                  >  Add to Cart 
                     <AddShoppingCartIcon fontSize="medium" />
                    
                  </IconButton>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default VinylDetail;
