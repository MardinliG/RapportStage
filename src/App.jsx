import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import Presentation from './components/Presentation';
import Bento from './components/Bento';
import Bento2 from './components/Bento2';

function App() {

  const hideNavbarRoutes = ["/bento2"]; // Routes where the navbar should be hidden
  return (
    <Router>
      <div>
        {!hideNavbarRoutes.includes(window.location.pathname) && <Navbar />}
        <main>
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/bento" element={<Bento />} />
            <Route path="/bento2" element={<Bento2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
