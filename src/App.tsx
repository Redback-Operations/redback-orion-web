import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Heatmaps from './components/Heatmaps';
import LiveFeed from './components/LiveFeed';
import CrowdAnalytics from './components/CrowdAnalytics';
import InteractiveMaps from './components/InteractiveMaps';
import Reports from './components/Reports';
import UserManagement from './components/UserManagement';
import SystemSettings from './components/SystemSettings';
import Help from './components/Help';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/heatmaps" element={<Heatmaps />} />
        <Route path="/livefeed" element={<LiveFeed />} />
        <Route path="/analytics" element={<CrowdAnalytics />} />
        <Route path="/maps" element={<InteractiveMaps />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/settings" element={<SystemSettings />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
