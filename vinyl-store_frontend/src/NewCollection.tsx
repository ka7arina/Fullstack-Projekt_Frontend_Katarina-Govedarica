import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppBar from './Components/AppBar/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Grid, Typography } from '@mui/material';

interface Artist {
  id: number;
  name: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Status {
  id: number;
  name: string;
}

interface Vinyl {
  id: number;
  title: string;
  size: number;
  artist: Artist;
  releaseYear: string;
  status: Status;
  genre: Genre;
  price: number;
  imageFilePath: string;
}

const NewCollection: React.FC = () => {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/vinyls')
      .then(response => {
        const shortNSweetVinyls = response.data.filter((vinyl: Vinyl) => vinyl.title.includes("Short N' Sweet"));
        setVinyls(shortNSweetVinyls);
      })
      .catch(error => {
        console.error('Error fetching vinyls:', error);
      });
  }, []);
  
  return (
    <div>
      <AppBar />
      <Box sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          {vinyls.map((vinyl) => (
            <Grid item key={vinyl.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="vinylCard" sx={{ marginBottom: 2, width: '100%' }}>
                <CardContent>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    onClick={() => navigate(`/vinyl/${vinyl.id}`)}
                    style={{ cursor: 'pointer' }}>
                    <div>
                      <img src={`http://localhost:8080/images/${vinyl.imageFilePath.split('/').pop()}`}
                        alt={`${vinyl.title} cover`}
                        width="100%" />
                    </div>
                  </Box>
                  <Box
                    onClick={() => navigate(`/vinyl/${vinyl.id}`)}
                    style={{ cursor: 'pointer' }}>
                    <Typography component="div" align="left">
                      {vinyl.title}
                    </Typography>
                    <Typography component="div" align="left">
                      {vinyl.artist.name}
                    </Typography>
                  </Box>
                  <Box marginTop="5%"
                    onClick={() => navigate(`/vinyl/${vinyl.id}`)}
                    style={{ cursor: 'pointer' }}>
                    <Typography component="div" align="left">
                      ${vinyl.price}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default NewCollection;
