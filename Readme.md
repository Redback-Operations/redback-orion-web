**Crowd Monitoring System**

This project is a **Crowd Monitoring System** that tracks, monitors, and analyzes crowd movement using AI-based real-time crowd detection and monitoring. The project comprises both a backend and a frontend, where the backend manages data processing, live video feeds, and people counting, while the frontend displays real-time video and statistical charts on a web dashboard.

**Table of Contents**

1. [Project Overview](#project-overview)
2. [Frontend Details](#frontend-details)
    - [Features](#features)
    - [Technologies Used](#technologies-used)
    - [Component Breakdown](#component-breakdown)
    - [Styling](#styling)
3. [Backend Details](#backend-details)
    - [Features](#backend-features)
    - [Technologies Used](#backend-technologies-used)
    - [API Endpoints](#api-endpoints)
4. [Installation and Running Instructions](#installation-and-running-instructions)
5. [Troubleshooting](#troubleshooting)
6. [Contributors](#contributors)

**Project Overview**

The **Crowd Monitoring System** is designed to help monitor crowd activities in real-time by capturing video footage, detecting people using AI (YOLOv8), and generating crowd analytics such as people count and crowd density. This data is stored in a MongoDB database and visualized on a React-based web dashboard, which also shows a live video feed.

**Frontend Details**

The frontend is a React-based web application designed to visualize real-time crowd data, people counts, and live video feeds from the backend.

**Features**

- **Live Video Feed**: Displays the live camera feed captured by the backend.
- **Real-Time People Count**: Automatically updates every second to display the current number of people detected.
- **Charts**: Displays charts of people counts over:
  - The last hour (with 15-minute intervals)
  - The last 30 minutes (with 1-minute intervals)
- **Responsive Design**: The layout is responsive to different screen sizes, such as mobile and desktop.

**Technologies Used**

- **React**: For building the user interface.
- **Chart.js**: For rendering statistical charts.
- **TypeScript**: To ensure type safety and improve maintainability.
- **Styled-Components**: For styling the components.
- **Fetch API**: For making requests to the backend.

**Component Breakdown**

**App.tsx**

The main entry point of the frontend application. It houses the overall layout, including the header and the main content area for the dashboard. The Dashboard component is rendered here.

**Dashboard.tsx**

The key component responsible for displaying:

- **Live Video**: Displays a live camera feed sourced from the backend.
- **Live People Count**: Shows the current count of people detected by the system, updated every second.
- **Charts**: Displays charts showing:
  - **Last Hour People Count**: People count data in 15-minute intervals.
  - **Last 30 Minutes People Count**: People count data in 1-minute intervals.

Here’s the key data-fetching logic:

- **Auto-refresh for live people count**: Fetches data every second.
- **Auto-refresh for chart data**: Fetches people count data every 5 minutes for chart updates.

**api.ts**

Handles all the API requests for fetching live people counts and people count data over the last hour and last 30 minutes. It centralizes API requests, ensuring separation of concerns between data fetching and rendering.

**Styling**

The frontend is styled using **Styled-Components** and **CSS files**.

- **Grid Layout**: The dashboard grid follows a 2x2 layout for displaying people count, density, and charts. The live video is displayed separately at the top, centered.
- **Responsive Design**: The layout adjusts to smaller screens by switching to a one-column design.

**Backend Details**

The backend is built using **Flask** to handle video processing, people counting, and serve the API for the frontend. It connects to a **MongoDB** database to store and retrieve data, and processes live camera feeds using the **YOLOv8** object detection model.

**Backend Features**

- **Real-Time Video Feed**: Captures video from an RTSP stream and processes frames using YOLOv8 for crowd detection.
- **People Counting**: Detects and counts the number of people in real-time.
- **Data Storage**: Stores people count data in MongoDB with timestamps.
- **Data Aggregation**: Provides aggregated people count data for the last hour and last 30 minutes.

**Backend Technologies Used**

- **Flask**: A lightweight web framework for serving the API.
- **MongoDB**: A NoSQL database for storing people count data.
- **YOLOv8**: A pre-trained object detection model for detecting and tracking people.
- **OpenCV**: Used for image and video frame processing.
- **Pymongo**: Python MongoDB driver to communicate with the database.

**API Endpoints**

The following API endpoints are provided by the backend:

- **GET /api/liveCount**: Returns the current live people count.
- **GET /api/last_hour_data**: Returns people count data for the last hour (15-minute intervals).
- **GET /api/last_30_minutes_data**: Returns people count data for the last 30 minutes (1-minute intervals).
- **GET /LiveTracking/videoFeed**: Provides the live video stream of the camera feed.
- **GET /LiveTracking/annotatedVideoFeed**: Provides the video stream with annotated people detection.

**Data Structure**

The data is stored in MongoDB as records with the following fields:

- **frameId**: Unique frame identifier.
- **peopleCount**: The number of people detected in a particular frame.
- **timestamp**: Timestamp when the data was captured, in the format "%d-%m-%Y %H:%M:%S".

**Installation and Running Instructions**

**Prerequisites**

- **Node.js**: For running the frontend.
- **Python**: For running the backend.
- **MongoDB**: A running MongoDB instance or MongoDB Atlas.

**Steps to Run the Backend**

1. Clone the repository.
2. Navigate to the backend folder: cd backend.
3. Install the required Python packages:

pip install -r requirements.txt

1. Make sure the MongoDB connection string is correct in database.py.
2. Run the Flask backend:

python app.py

**Steps to Run the Frontend**

1. Navigate to the frontend folder: cd frontend.
2. Install the required Node.js packages:

npm install

1. Run the frontend:

npm start

1. Open the browser and go to <http://localhost:3000> to see the dashboard.

**Troubleshooting**

1. **No live video feed is displayed**:
    - Check if the backend is running and properly serving the video feed at /LiveTracking/videoFeed.
    - Ensure the RTSP stream URL is correct and the camera feed is available.
2. **People count not updating**:
    - Check the API endpoint /api/liveCount to see if the backend is providing the data.
    - Verify if the MongoDB connection is correct and if people count data is being stored.
3. **Charts not displaying correctly**:
    - Verify if the API endpoints /api/last_hour_data and /api/last_30_minutes_data are working and providing the correct data format.

**Contributors**

- **Your Name**: Frontend and Backend development.
- **Groupmate’s Name**: Backend improvements, video processing with YOLOv8.
- **Mentor**: Guidance and feedback on the project.