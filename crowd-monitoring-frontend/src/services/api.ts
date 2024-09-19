const backendUrl = 'http://localhost:8000';  // Backend URL

// Fetch last hour data
export const fetchLastHourData = async () => {
  try {
    const response = await fetch(`${backendUrl}/api/last_hour_data`);
    if (!response.ok) {
      throw new Error(`Error fetching last hour data: ${response.statusText}`);
    }
    const result = await response.json();
    return result['last hour data'].map((item: any) => ({
      time: item.time,  // Use the 'time' field formatted by the backend
      count: Math.round(item.count)  // Use the 'count' field returned by the backend
    }));
  } catch (error) {
    console.error('Error fetching last hour data:', error);
    return [];
  }
};

// Fetch last 30 minutes data
export const fetchLast30MinutesData = async () => {
  try {
    const response = await fetch(`${backendUrl}/api/last_30_minutes_data`);
    if (!response.ok) {
      throw new Error(`Error fetching last 30 minutes data: ${response.statusText}`);
    }
    const result = await response.json();
    return result.data.map((item: any) => ({
      minute: item.time,  // Use the 'time' field formatted by the backend
      count: Math.round(item.count)  // Use the 'count' field returned by the backend
    }));
  } catch (error) {
    console.error('Error fetching last 30 minutes data:', error);
    return [];
  }
};

// Fetch the current live people count
export const fetchPeopleCount = async () => {
  try {
    const response = await fetch(`${backendUrl}/api/liveCount`);
    if (!response.ok) {
      throw new Error(`Error fetching people count: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      livePeopleCount: data.livePeopleCount,
      rollingAverage: data.rollingAverage,
      futurePrediction: data.futurePrediction,
    };
  } catch (error) {
    console.error('Error fetching people count:', error);
    return null;
  }
};
