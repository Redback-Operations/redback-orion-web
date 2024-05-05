// EventManagementPage.js

import React from 'react';
import './styles.css'; // Import your CSS file

function EventManagementPage() {
  return (
    <div className="EventManagementPage">
      <header>
        <img src="Logo.svg" alt="Crowd Management Platform Logo" />
        <h1>Event Management</h1>
      </header>
      <main>
        <section className="social-media">
          <h2>Social Media</h2>
          <div className="social-media-links">
            {/* Social media links and handles go here */}
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </section>
        <section className="event-listings">
          <h2>Event Listings</h2>
          <div className="event-list">
            {/* Event listings with details go here */}
            <div className="event">
              <h3>Event Name</h3>
              <p>Date: January 1, 2025</p>
              <p>Time: 10:00 AM - 5:00 PM</p>
              <p>Location: Venue Name, City</p>
              <p>Expected Attendance: 1000</p>
            </div>
            {/* Add more event listings as needed */}
          </div>
        </section>
        <section className="event-analysis">
          <h2>Event Analysis</h2>
          <p>Tools for analyzing past events and crowd behavior will be available here.</p>
          {/* Add the image below the paragraph */}
          <img src="Visual.gif" alt="Visual Analysis" />
        </section>
        <section className="risk-assessment">
          <h2>Risk Assessment</h2>
          <p>Platform for assessing potential risks associated with upcoming events based on historical data and current trends.</p>
          {/* Add the image below the paragraph */}
          <img src="Risk.png" alt="Risk Assessment" />
        </section>
        <section className="communication-channels">
          <h2>Communication Channels</h2>
          <p>Enable event organizers to communicate with stakeholders and authorities regarding crowd management plans and strategies.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Crowd Management Platform</p>
      </footer>
    </div>
  );
}

export default EventManagementPage;
