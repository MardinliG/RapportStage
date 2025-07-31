import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bento2 from './components/Bento2';
import RapportStage from './components/RapportStage';

function App() {

  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Bento2 />} />
            <Route path="/rapport-stage" element={<RapportStage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
