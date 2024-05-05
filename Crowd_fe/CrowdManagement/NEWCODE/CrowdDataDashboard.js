// CrowdManagementPlatform.js

import React from 'react';
import './styles.css'; // Import your CSS file

function CrowdManagementPlatform() {
  return (
    <div className="CrowdManagementPlatform">
      <header>
        <img src="Logo.svg" alt="Crowd Management Platform Logo" />
        <h1>Welcome to Crowd Management Platform</h1>
      </header>
      <main>
        <section className="introduction">
          <h2>Introduction</h2>
          <p>The Crowd Management Platform provides real-time monitoring and analysis of crowd situations and events. Our platform aims to help event organizers, authorities, and stakeholders in effectively managing crowds, ensuring safety, and optimizing event experiences.</p>
          {/* Add the image below the paragraph */}
          <img src="Crowd.png" alt="Crowd Image" className="crowd-image" />
        </section>
        <section className="live-updates">
          <h2>Live Updates</h2>
          <div className="updates-container">
            {/* Add the gif image here */}
            <img src="updates.gif" alt="Live Updates" className="live-updates-image" />
          </div>
        </section>
        <section className="charts">
          <h2>Statistics</h2>
          <div className="chart-container">
            <canvas id="crowd-density-chart"></canvas>
            <canvas id="crowd-distribution-chart"></canvas>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Crowd Management Platform</p>
      </footer>
    </div>
  );
}

export default CrowdManagementPlatform;
