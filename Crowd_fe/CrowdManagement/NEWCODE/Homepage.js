// HomePage.js

import React from 'react';
import './styles.css'; // Import your CSS file

function HomePage() {
  const handleSignUp = () => {
    alert('Sign up functionality will be implemented later.');
  };

  return (
    <div className="HomePage">
      <header>
        <img src="Logo.svg" alt="Crowd Management Platform Logo" />
        <h1>Crowd Management Platform</h1>
      </header>
      <main>
        <section className="introduction">
          <h2>Introduction</h2>
          <p>Welcome to the Crowd Management Platform. Our platform aims to provide real-time monitoring and management of crowd situations and events. We strive to ensure safety, optimize event experiences, and facilitate effective crowd management.</p>
        </section>
        {/* New section for Image 2 */}
        <section className="image-section">
          <img src="Image 2.jpeg" alt="Image 2" />
        </section>
        <section className="live-updates">
          <h2>Live Updates</h2>
          <div className="updates-container">
            {/* Simulated live updates content */}
            <div className="live-update">
              <h3>Live Update 1</h3>
              <p>Crowd Size: 800</p>
              <p>Location: Central Park</p>
              <p>Alert: High Traffic</p>
            </div>
            <div className="live-update">
              <h3>Live Update 2</h3>
              <p>Crowd Size: 1200</p>
              <p>Location: Times Square</p>
              <p>Alert: Security Concern</p>
            </div>
            {/* Add more simulated live updates as needed */}
          </div>
        </section>
        <nav className="navigation">
          <h2>Navigation</h2>
          <ul>
            <li><a href="EventManagement">Event Management</a></li>
            <li><a href="ResourcesAndSupport">Resources and Support</a></li>
            <li><a href="CrowdDataDashboard">Crowd Data Dashboard</a></li>
            <li><a href="Homepage">Contact Us</a></li>
          </ul>
        </nav>
        <section className="call-to-action">
          <h2>Call to Action</h2>
          <p>Explore further to discover the full capabilities of our platform. Sign up to receive alerts and notifications about crowd situations and events.</p>
          <button onClick={handleSignUp}>Sign Up</button>
        </section>
        <section className="event-maps">
          <h2>Event Maps</h2>
          <div id="map"></div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Crowd Management Platform</p>
      </footer>
      {/* Import Chart.js and Leaflet.js here */}
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.js"></script>
      {/* Include custom scripts */}
      <script src="scripts.js"></script>
    </div>
  );
}

export default HomePage;
