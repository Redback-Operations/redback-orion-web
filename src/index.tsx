import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './screens/Login';
import { ExploreMore } from './screens/ExploreMore';
import { LandingPage } from './screens/LandingPage';
import { MyProfile } from './screens/MyProfile';
import { PlayerStats } from './screens/PlayerStats';
import { TeamStats } from './screens/TeamStats/TeamStats';

// Ensure that the HTML element 'app' exists and is not null
const app = document.getElementById('app') as HTMLElement;
const root = createRoot(app);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ExploreMore" element={<ExploreMore />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/PlayerStats" element={<PlayerStats />} />
        <Route path="/TeamStats" element={<TeamStats />} />
        <Route path="*" element={<div>404 Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

root.render(<App />);
