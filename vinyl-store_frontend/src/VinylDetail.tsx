import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

  return (
    <div>
      <h1>{vinyl.title}</h1>
      <p>Artist: {vinyl.artist.name}</p>
      <p>Release Year: {vinyl.releaseYear}</p>
      <p>Genre: {vinyl.genre.name}</p>
      <p>Status: {vinyl.status.name}</p>
      <p>Price: ${vinyl.price}</p>
      {vinyl.imageFilePath && (
        <img src={vinyl.imageFilePath} alt={vinyl.title} />
      )}
    </div>
  );
}

export default VinylDetail;
