import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const VideoFrame = styled.iframe`
  border: none;
  width: 640px;
  height: 480px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Footer = styled.footer`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const PiCam = () => {
  return (
    <Container>
      <Header>PiCam Live Streaming</Header>
      <div className="img-container">
        <VideoFrame src="http://192.168.0.197:8000/video_feed" /> {/* Use the IP address of your Raspberry Pi */}
      </div>
      <Footer>Ayush Kumar Som 22198016</Footer>
    </Container>
  );
};

export default PiCam;