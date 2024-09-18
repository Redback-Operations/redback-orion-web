import React, { useState, useEffect } from 'react';

const VideoStream: React.FC = () => {
  const [imageKey, setImageKey] = useState(0);
  const videoUrl = "http://localhost:8000/LiveTracking/videoFeed"; // Update this URL as necessary

  useEffect(() => {
    const interval = setInterval(() => {
        setImageKey(prevKey => prevKey + 1);
    }, 1000); // Refresh every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>Live Camera Feed</h2>
      <img 
        src={videoUrl} 
        alt="Live Camera Feed" 
        style={{ width: '100%', maxWidth: '800px', height: 'auto', border: '2px solid #333', borderRadius: '10px' }} 
        onError={(e) => {
          (e.currentTarget.src = 'path-to-placeholder-image.jpg');
           console.error("Failed to load video feed");
        }} // Optional: Add a fallback image
      />
      <p>If the video does not load, please check the camera or backend connection.</p>
    </div>
  );
};

export default VideoStream;
