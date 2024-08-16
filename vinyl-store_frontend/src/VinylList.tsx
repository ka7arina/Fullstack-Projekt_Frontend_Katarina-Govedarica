import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppBar from './Components/AppBar/AppBar';
import './VinylList.css'; // Import the CSS
import TheButton from './Components/Buttons'; // Correctly import the button component

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

  useEffect(() => {
    axios.get('http://localhost:8080/vinyls')
      .then(response => {
        setVinyls(response.data);
      })
      .catch(error => {
        console.error('Error fetching vinyls:', error);
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
        <h1 className="title">Brat - A Collab</h1>
      </div>
      <ul>
        {vinyls.map(vinyl => (
          <li key={vinyl.id}>
            <Link to={`/vinyl/${vinyl.id}`}>
              {vinyl.title} by {vinyl.artist.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VinylList;
