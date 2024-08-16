import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppBar from './Components/AppBar/AppBar';
import './VinylList.css';
import TheButton from './Components/Buttons'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, Button, Collapse, IconButton, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';

interface Artist {
  id: number;
  name: string;
}

interface Vinyl {
  id: number;
  title: string;
  artist: Artist;
}

const VinylList: React.FC = () => {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);


  // the axios thing for fetching all the vinyls
  useEffect(() => {
    axios.get('http://localhost:8080/vinyls')
      .then(response => {
        setVinyls(response.data);
      })
      .catch(error => {
        console.error('Error fetching vinyls:', error);
      });
  }, []);

  // the axios thing for fetching all the artists
  useEffect(() => {
    axios.get('http://localhost:8080/artists')
      .then(response => {
        setArtists(response.data);
      })
      .catch(error => {
        console.error('Error fetching artists:', error);
      });
  }, []);

  return (
    <div>
      <AppBar />
      <div className="image-container">
        <img src='src/assets/frontimage.jpeg' alt="Vinyl Records" className="background-image" />
        <div className="overlay">
          <TheButton />  {/* Use your custom button component */}
        </div>
        <h1 className="title">Vinyl - A Collab</h1>
      </div>
      <Box sx={{ minWidth: 100, maxWidth: 300
      }}>
      </Box>
        {vinyls.map(vinyl => (
          <li key={vinyl.id}>
              <Box sx={{ minWidth: 275, marginBottom: 2 }}>
                    <Card className="vinylCard" variant="outlined">
                      <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="h5" component="div">
                            Artist: {vinyl.artist}
                          </Typography>
                        </Box>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Genre: 
                        </Typography>
                      </CardContent>
                      <CardActions>
                      </CardActions>
                      <Collapse timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography variant="h6">Albums/EP's</Typography>
                          <ul>
                              <p>No albums found.</p>
                          </ul>
                          <Typography variant="h6">Top Tracks</Typography>
                          <ul>
                              <p>No top tracks found.</p>
            
                          </ul>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Box>
                </li>
              ))}
    </div>
  );
}

export default VinylList;
