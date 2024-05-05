// App.js

import React from 'react';
import CrowdManagementPlatform from './CrowdManagementPlatform';
import EventManagementPage from './EventManagementPage';
import HomePage from './Homepage';

function App() {
  return (
    <div className="App">
      <CrowdManagementPlatform />
      <EventManagementPage />
      <HomePage />
    </div>
  );
}

export default App;
