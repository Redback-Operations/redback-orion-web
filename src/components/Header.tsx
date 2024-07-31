import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/heatmaps">Heatmaps</Link></li>
          <li><Link to="/livefeed">Live Feed</Link></li>
          <li><Link to="/analytics">Crowd Analytics</Link></li>
          <li><Link to="/maps">Interactive Maps</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/user-management">User Management</Link></li>
          <li><Link to="/settings">System Settings</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
