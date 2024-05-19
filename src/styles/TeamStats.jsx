import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 20px;
`;

export const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  text-align: center;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PlayerList = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const PlayerButton = styled.button`
  padding: 10px;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StatsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 200px);
`;

export const GraphContainer = styled.div`
  width: 900px;  // Container width
  height: 400px; // Container height
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;  // Ensures that any overflow is hidden, so the image doesn't spill out

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  // Ensures the image covers the container
  }
`;

export const PositionImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  p {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Arrow = styled.div`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
`;

// Image Text
export const ImageText = styled.span`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;