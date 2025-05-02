
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Bmi from './package/Bmi';
import Bmr from './package/Bmr';
import Contact from './package/Contact';
import Tracker from './pages/Tracker';
import Calorie from './package/Calorie';
import Diet from './package/Diet';

import Hamstring from './Backexer/Hamstring';
import Glutes from './Backexer/Glutes';
import Lats from './Backexer/Lats';
import Traps from './Backexer/Traps';
import Tricep from './Backexer/Tricep';
import Lowerback from './Backexer/Lowerback';
import RearShoulders from './Backexer/RearShoulders';
import TrapsMiddle from './Backexer/Trapmiddle';

import Abdominal from './Frontexer/Abdominal';
import Biceps from './Frontexer/Biceps';
import Calves from './Frontexer/Calves';
import Chest from './Frontexer/Chest';
import Forearm from './Frontexer/Forearm';
import Obliques from './Frontexer/Obliques';
import Quad from './Frontexer/Quad';
function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Bmi" element={<Bmi />} />
        <Route path="/Bmr" element={<Bmr />} />
        <Route path="/Calorie" element={<Calorie />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Tracker" element={<Tracker />} />
        <Route path="/Diet" element={<Diet />} />

        <Route path="/Backexer/hamstrings" element={<Hamstring />} />
        <Route path="/Backexer/Glutes" element={<Glutes />} />
        <Route path="/Backexer/Lats" element={<Lats />} />
        <Route path="/Backexer/Traps" element={<Traps />} />
        <Route path="/Backexer/Tricep" element={<Tricep />} />
        <Route path="/Backexer/Lowerback" element={<Lowerback />} />
        <Route path="/Backexer/rear-shoulders" element={<RearShoulders />} />
<Route path="/Backexer/traps-middle" element={<TrapsMiddle />} />

        <Route path="/Frontexer/abdominals" element={<Abdominal />} />
        <Route path="/Frontexer/Biceps" element={<Biceps />} />
        <Route path="/Frontexer/calves" element={<Calves />} />
        <Route path="/Frontexer/Chest" element={<Chest />} />
        <Route path="/Frontexer/forearms" element={<Forearm />} />
        <Route path="/Frontexer/Obliques" element={<Obliques />} />
        <Route path="/Frontexer/quads" element={<Quad />} />
        <Route path="/Frontexer/Traps" element={<Traps/>} />
      </Routes>
    </Router>
  );
}

export default App;
