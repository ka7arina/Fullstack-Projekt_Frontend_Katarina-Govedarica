import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VinylList from './VinylList';
import VinylDetail from './VinylDetail';
import NewCollection from './NewCollection';
import Checkout from './Checkout';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VinylList />} />
          <Route path="/vinyl/:id" element={<VinylDetail />} />
          <Route path="/shortnsweet" element={<NewCollection />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
