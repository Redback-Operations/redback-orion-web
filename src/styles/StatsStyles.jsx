import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

// Header
export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 20px;
`;

// SubHeader
export const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  text-align: center;
`;

// Summary Container
export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
`;

export const Statsname = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100px;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

// Stat Box
export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 150px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  h2 {
    margin: 0;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

// Map Container
export const MapContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

// Insights Container
export const InsightsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-10px);
  }
`;

// Radar Chart
export const RadarChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  p {
    margin: 10px 0 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

// Stats Group
export const StatsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Line Chart
export const LineChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  p {
    margin: 10px 0 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }
`;