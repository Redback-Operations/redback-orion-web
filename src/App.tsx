import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeLogo from './assets/home_logo.png';
import HomeCrowd from './assets/home_crowd_1.jpeg';
import RealTimeLogo from './assets/realtime_logo.svg';
import IoTDeviceLogo from './assets/iot_device_logo.svg';
import ComputerVisionLogo from './assets/computer_vision_logo.svg';
import PredictModelLogo from './assets/predict_model_logo.svg';
import HeatmapLogo from './assets/heatmap_logo.svg';
import InteractiveLogo from './assets/interactive_logo.svg';
import PJohnDoe from './assets/p_john_doe.jpeg';
import PJaneSmith from './assets/p_jane_smith.jpeg';
import PAliceJohnson from './assets/p_alice_johnson.jpeg';
import PRobertDown from './assets/p_robert_down.jpeg';
import PEmilyDavis from './assets/p_emily_davis.jpeg';
import OpenHours from './assets/open_hours.svg';
import Location from './assets/location.svg';
import Call from './assets/call.svg';
import SpaceXLogo from './assets/spacex_logo.svg';
import FBLogo from './assets/fb_logo.svg';
import IGLogo from './assets/ig_logo.svg';
import GitHubLogo from './assets/github_logo.svg';

const Container = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
  box-sizing: border-box;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: white;
  border-bottom: 1px solid #ccc;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const Main = styled.main`
  padding: 20px;
`;

const Section = styled.section`
  margin: 40px 0;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  align-items: center;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: black;
  color: white;
`;

const Logo = styled.img`
  width: 10%;
`;

const FeatureLogo = styled.img`
  width: 50%;
  margin: 0 auto;
`;

const App: React.FC = () => (
  <Container>
    <Header>
      <Logo src={HomeLogo} alt="Home Logo" />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/live-data">Live Data</Link>
        <Link to="/contact">Contact Us</Link>
      </Nav>
    </Header>
    <Main>
      <Section>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h1>Welcome to Crowd Dynamics</h1>
            <p>Discover real-time insights into crowd movements and interactions using advanced IoT and sensor technology.</p>
            <Link to="/live-data">
              <button style={{ background: 'lightpurple', borderRadius: '20px', padding: '10px 20px' }}>Explore Our Data</button>
            </Link>
          </div>
          <img src={HomeCrowd} alt="Crowd" style={{ width: '50%' }} />
        </div>
      </Section>
      <Section>
        <h2>Key Features</h2>
        <Grid>
          <div>
            <FeatureLogo src={RealTimeLogo} alt="Real-Time Tracking" />
            <h3>Real-Time Tracking</h3>
            <p>Monitor crowd movements and interactions in real-time.</p>
          </div>
          <div>
            <FeatureLogo src={IoTDeviceLogo} alt="Advanced IoT Devices" />
            <h3>Advanced IoT Devices</h3>
            <p>Utilize cutting-edge wearable technology for accurate data collection.</p>
          </div>
          <div>
            <FeatureLogo src={ComputerVisionLogo} alt="Computer Vision" />
            <h3>Computer Vision</h3>
            <p>Employ computer vision to analyze and interpret video streams.</p>
          </div>
          <div>
            <FeatureLogo src={PredictModelLogo} alt="Predictive Modeling" />
            <h3>Predictive Modeling</h3>
            <p>Use predictive analytics to forecast crowd behavior.</p>
          </div>
          <div>
            <FeatureLogo src={HeatmapLogo} alt="Heatmaps" />
            <h3>Heatmaps</h3>
            <p>Visualize crowd density and movement patterns with heatmaps.</p>
          </div>
          <div>
            <FeatureLogo src={InteractiveLogo} alt="Interaction Insights" />
            <h3>Interaction Insights</h3>
            <p>Gain insights into how people interact within the crowd.</p>
          </div>
        </Grid>
      </Section>
      <Section>
        <h2>Live Data Stats</h2>
        <Grid>
          <div>
            <h3>Total Number of people</h3>
            <p>Real-time statistics showcasing the number of people, heatmaps, and video feeds.</p>
          </div>
          <div>
            <h3>Heatmap (Crowd density)</h3>
            <p>Visualize crowd density and movement patterns with heatmaps.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/live-video">
              <button style={{ background: 'lightpurple', borderRadius: '20px', padding: '10px 20px', marginTop: '10px' }}>Live Video Streams</button>
            </Link>
          </div>
        </Grid>
      </Section>
      <Section>
        <h2>Meet our team</h2>
        <TeamGrid>
          <div>
            <img src={PJohnDoe} alt="John Doe" />
            <h3>John Doe</h3>
            <p>Lead Data Scientist</p>
          </div>
          <div>
            <img src={PJaneSmith} alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>IoT Specialist</p>
          </div>
          <div>
            <img src={PAliceJohnson} alt="Alice Johnson" />
            <h3>Alice Johnson</h3>
            <p>Machine Learning Engineer</p>
          </div>
          <div>
            <img src={PRobertDown} alt="Robert Brown" />
            <h3>Robert Brown</h3>
            <p>Computer Vision Expert</p>
          </div>
          <div>
            <img src={PEmilyDavis} alt="Emily Davis" />
            <h3>Emily Davis</h3>
            <p>Project Manager</p>
          </div>
        </TeamGrid>
      </Section>
      <Section>
        <h2>Get in Touch</h2>
        <Grid>
          <div>
            <img src={OpenHours} alt="Office Hours" />
            <h3>Office Hours</h3>
            <p>Monday-Friday 8:00 am to 5:00 pm</p>
          </div>
          <div>
            <img src={Location} alt="Our Address" />
            <h3>Our Address</h3>
            <p>221 Burwood Highway, Burwood, Victoria 3125</p>
          </div>
          <div>
            <img src={Call} alt="Contact Us" />
            <h3>Contact Us</h3>
            <p>+61 3 9244 6333</p>
          </div>
        </Grid>
      </Section>
    </Main>
    <Footer>
      <div>
        <img src={SpaceXLogo} alt="Twitter" style={{ width: '30px', margin: '0 10px' }} />
        <img src={FBLogo} alt="Facebook" style={{ width: '30px', margin: '0 10px' }} />
        <img src={IGLogo} alt="Instagram" style={{ width: '30px', margin: '0 10px' }} />
        <img src={GitHubLogo} alt="GitHub" style={{ width: '30px', margin: '0 10px' }} />
      </div>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/live-data">Live Data</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
      <div>
        <p>© Crowd Dynamics 2023, All Rights Reserved</p>
      </div>
    </Footer>
  </Container>
);

export default App;
