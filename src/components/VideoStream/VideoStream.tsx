// src/components/VideoStream.tsx
import React from 'react';

const VideoStream: React.FC = () => {
  return (
    <div>
      <h2>Live Video Stream</h2>
      <img 
        src="http://localhost:8000/video_feed" 
        alt="Live Video Stream"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
      />
    </div>
  );
};

export default VideoStream;
