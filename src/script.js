document.addEventListener("DOMContentLoaded", function() {
    // Simulated data for charts
    const crowdDensityData = [65, 59, 80, 81, 56, 55, 40];
    const crowdDistributionData = [12, 19, 3, 5, 2];

    // Chart.js configuration
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
});


// Leaflet map setup
var map = L.map('map', {
    center: [40.7128, -74.0060], // Default center coordinates (New York City)
    zoom: 10 // Default zoom level
});

// Set up the tile layer with correct attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Update map size on window resize
window.addEventListener('resize', function() {
    map.invalidateSize();
});
