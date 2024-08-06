import React, { useEffect, useState } from 'react';

const HeatmapComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/heatmap')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching heatmap data:', error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {/* Render heatmap data here */}
        </div>
      ) : (
        <p>Loading heatmap data...</p>
      )}
    </div>
  );
};

export default HeatmapComponent;
