import React from 'react';
import styled from 'styled-components';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo>🏠 Crowd Monitoring System</Logo>
      </Header>

      <MainContent>
        {/* Home Section */}
        <Section>
          <h1>Welcome to the Crowd Monitoring System</h1>
          <p>
            Track, monitor, and analyze crowd movements with real-time data using AI-based crowd detection, monitoring, and analysis tools.
          </p>
        </Section>

        {/* Dashboard Section */}
        <Section>
          <Dashboard />
        </Section>
      </MainContent>

      <Footer>
        <p>© 2024 Crowd Monitoring System. All Rights Reserved</p>
      </Footer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  padding: 20px;
  background: #333;
  color: white;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 24px;
`;

const MainContent = styled.main`
  padding: 20px;
`;

const Section = styled.section`
  margin: 40px 0;
`;

const Footer = styled.footer`
  padding: 20px;
  background: #333;
  color: white;
  text-align: center;
`;

export default App;
