import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VinylList from './VinylList';
import VinylDetail from './VinylDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VinylList />} />
          <Route path="/vinyl/:id" element={<VinylDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
