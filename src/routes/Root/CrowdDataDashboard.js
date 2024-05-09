// CrowdDataDashboard.js
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import './styles.css';
import Scripts from './Scripts';

const CrowdDataDashboard = () => {
    useEffect(() => {
        const crowdDensityData = [65, 59, 80, 81, 56, 55, 40];
        const crowdDistributionData = [12, 19, 3, 5, 2];

        const densityChart = new Chart(document.getElementById('crowd-density-chart').getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
                datasets: [{
                    label: 'Crowd Density',
                    data: crowdDensityData,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {}
        });

        const distributionChart = new Chart(document.getElementById('crowd-distribution-chart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Central Park', 'Times Square', 'Grand Central Station', 'Brooklyn Bridge', 'Empire State Building'],
                datasets: [{
                    label: 'Crowd Distribution',
                    data: crowdDistributionData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {}
        });
    }, []);

    return (
        <div>
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
            <Scripts />
        </div>
    );
};

export default CrowdDataDashboard;
