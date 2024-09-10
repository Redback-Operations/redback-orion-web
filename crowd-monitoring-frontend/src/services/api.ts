const backendUrl = 'http://localhost:8000';  // Backend URL

// Fetch hourly data for the last 24 hours
export const fetchHourlyData = async () => {
  try {
    const response = await fetch(`${backendUrl}/api/hourly_data`);
    if (!response.ok) {
      throw new Error(`Error fetching hourly data: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((item: any) => ({
      time: item.time,  // Use the 'time' field formatted by the backend
      count: Math.round(item.count)  // Use the 'count' field returned by the backend
    }));
  } catch (error) {
    console.error('Error fetching hourly data:', error);
    return [];
  }
};

// Fetch daily data for the last 30 days
export const fetchDailyData = async () => {
  try {
    const response = await fetch(`${backendUrl}/api/daily_data`);
    if (!response.ok) {
      throw new Error(`Error fetching daily data: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((item: any) => ({
      date: item.date,  // Use the 'date' field formatted by the backend
      count: Math.round(item.count)  // Use the 'count' field returned by the backend
    }));
  } catch (error) {
    console.error('Error fetching daily data:', error);
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
    return data.livePeopleCount;  // Fetch 'livePeopleCount' from the response
  } catch (error) {
    console.error('Error fetching people count:', error);
    return 0;
  }
};
