import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css'; // Import the CSS file for styling
import VideoStream from './VideoStream'; // Import the VideoStream component
import { ChartOptions } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const backendUrl = 'http://localhost:8000'; // Backend URL

// Define the monitored area as 100 square meters
const MONITORED_AREA = 100;

// Define a type for the data items
type DataItem = {
    time?: string;  // time for last hour or last 30 minutes data
    count: number;  // count of people
};

const Dashboard = () => {
    const [livePeopleCount, setLivePeopleCount] = useState(0);
    const [density, setDensity] = useState(0); // Placeholder for density calculation
    const [lastHourData, setLastHourData] = useState<DataItem[]>([]);
    const [last30MinutesData, setLast30MinutesData] = useState<DataItem[]>([]);
    const [rollingAverage, setRollingAverage] = useState(0);
    const [futurePrediction, setFuturePrediction] = useState(0);
    const [occupancyRate, setOccupancyRate] = useState(0);

    // Calculate density as people per 100 square meters
    const calculateDensity = (count: number) => {
        return Math.round(count / (MONITORED_AREA / 100));
    };

    // Function to fetch live people count
    const fetchLivePeopleCount = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/liveCount`);
            const result = await response.json();
            setLivePeopleCount(result.livePeopleCount);
            setRollingAverage(result.rollingAverage);
            setFuturePrediction(result.futurePrediction);
            setDensity(calculateDensity(result.livePeopleCount)); // Update density
        } catch (error) {
            console.error('Error fetching live people count:', error);
        }
    };

    const fetchOccupancyRate = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/occupancy`);
            const result = await response.json();
            setOccupancyRate(result.occupancyRate);
        } catch (error) {
            console.error('Error fetching occupancy rate:', error);
        }
    };

    // Fetch last hour people count (15-minute intervals)
    const fetchLastHourData = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/last_hour_data`);
            const result = await response.json();

            if (Array.isArray(result.data)) {
                setLastHourData(result.data);
            } else {
                console.error('Expected array but received:', result.data);
                setLastHourData([]);
            }
        } catch (error) {
            console.error('Error fetching last hour data:', error);
        }
    };

    // Fetch last 30 minutes people count (actual time intervals)
    const fetchLast30MinutesData = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/last_30_minutes_data`);
            const result = await response.json();

            if (Array.isArray(result.data)) {
                setLast30MinutesData(result.data);
            } else {
                console.error('Expected array but received:', result.data);
                setLast30MinutesData([]);
            }
        } catch (error) {
            console.error('Error fetching last 30 minutes data:', error);
        }
    };

    // Auto-refresh live people count every second
    useEffect(() => {
        fetchLivePeopleCount(); // Fetch initial count

        const interval = setInterval(() => {
            fetchLivePeopleCount();
        }, 1000); // Refresh every second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    // Auto-refresh last hour and last 30 minutes data every 5 minutes
    useEffect(() => {
        fetchLastHourData(); // Fetch initial data
        fetchLast30MinutesData();

        const interval = setInterval(() => {
            fetchLastHourData();
            fetchLast30MinutesData();
        }, 300000); // 5 minutes (300,000 ms)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    // Prepare chart data for last hour people count (15-minute intervals)
    const lastHourChartData = {
        labels: lastHourData.map(item => `${item.time || 'N/A'}`),
        datasets: [
            {
                label: 'People Count (Last Hour, 15-min Intervals)',
                data: lastHourData.map(item => item.count),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    // Prepare chart data for last 30 minutes people count (actual time)
    const last30MinutesChartData = {
        labels: last30MinutesData.map(item => `${item.time || 'N/A'}`),
        datasets: [
            {
                label: 'People Count (Last 30 Minutes, Actual Time)',
                data: last30MinutesData.map(item => item.count),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
            },
        ],
    };

    // Chart options to display integer Y-axis values
    const chartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value: any) {
                        return Number.isInteger(value) ? value : null;
                    },
                },
            },
            x: {
                ticks: {
                    maxTicksLimit: 5, // Limits the number of ticks on the x-axis
                    maxRotation: 0,   // Prevents x-axis labels from rotating
                    minRotation: 0,   // Sets minimum rotation
                    align: 'center',  // Align ticks to center
                },
                grid: {
                    display: false,   // Optionally hide grid lines
                },
            },
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 30, // Increase padding for x-axis labels
            },
        },
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    return (
        <div>
            {/* Live Video */}
            <VideoStream />

            {/* Grid for Data */}
            <div className="dashboard-grid">
                {/* Live People Count */}
                <div className="dashboard-item">
                    <h2>Live People Count</h2>
                    <p>{livePeopleCount}</p>
                </div>

                {/* Future Prediction of Live Count */}
                <div className="dashboard-item">
                    <h2>Future Prediction of Live People Count</h2>
                    <p>{futurePrediction.toFixed(2)} people</p>
                </div>

                {/* Density */}
                <div className="dashboard-item">
                    <h2>Density</h2>
                    <p>{density} people per 100 sq meters</p>
                </div>

                {/* Occupancy Rate of People in the Screen */}
                <div className="dashboard-item">
                    <h2>Occupancy Rate</h2>
                    <p>{occupancyRate.toFixed(2)}%</p>
                </div>

                {/* Last Hour People Count Chart */}
                <div className="dashboard-item-chart">
                    <h2>Last Hour People Count (15-min Intervals)</h2>
                    <Line data={lastHourChartData} options={chartOptions} />
                </div>

                {/* Last 30 Minutes People Count Chart */}
                <div className="dashboard-item-chart">
                    <h2>Last 30 Minutes People Count (Actual Time)</h2>
                    <Line data={last30MinutesChartData} options={chartOptions} />
                </div>

                {/* Rolling/Moving Average */}
                <div className="dashboard-item">
                    <h2>Rolling Average</h2>
                    <p>{rollingAverage.toFixed(2)} people</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
