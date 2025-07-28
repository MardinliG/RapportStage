import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timeline from './components/Timeline';
import Presentation from './components/Presentation';
import Bento from './components/Bento';
import Bento2 from './components/Bento2';
import RapportStage from './components/RapportStage';

function App() {

  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/bento" element={<Bento />} />
            <Route path="/bento2" element={<Bento2 />} />
            <Route path="/rapport-stage" element={<RapportStage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
