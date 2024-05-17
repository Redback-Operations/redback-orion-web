import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  SubHeader,
  ImageLink,
  ImageContainer,
  ImageText,
  Footer,
  FooterSection,
  ContactInfo,
  UsefulLinks,
  SocialIcons,
  SocialIconLink,
  ImageLinkContainer
} from '../styles/LandingPageStyles';

import img1 from './images/landing-page-img1.png';
import img2 from './images/landing-page-img2.png';
import img3 from './images/landing-page-img3.png';
import img4 from './images/landing-page-img4.png';

const LandingPage = () => {
  return (
    <Container>
      <Header>
        "Track, Analyse, Dominate"
      </Header>
      <SubHeader>
        Elevate Your Game with Personal and Team Analytics
      </SubHeader>
      <ImageLinkContainer>
        <ImageLink to="/Train">
          <ImageContainer>
            <img src={img1} alt="Train" />
            <ImageText>Train</ImageText>
          </ImageContainer>
        </ImageLink>
        <ImageLink to="/Stats">
          <ImageContainer>
            <img src={img2} alt="My Stats" />
            <ImageText>My Stats</ImageText>
          </ImageContainer>
        </ImageLink>
        <ImageLink to="/Team">
          <ImageContainer>
            <img src={img3} alt="My Team Stats" />
            <ImageText>My Team Stats</ImageText>
          </ImageContainer>
        </ImageLink>
        <ImageLink to="/PiCam">
          <ImageContainer>
            <img src={img4} alt="Crowd Monitoring" />
            <ImageText>Crowd Monitoring</ImageText>
          </ImageContainer>
        </ImageLink>
      </ImageLinkContainer>
      <Header>
        Stay Ahead of the Game: Real-Time Insights for Players and Teams
      </Header>
      <p>
        Welcome to Athlete Insight Hub, where staying ahead of the game isn't just a goal—it's a promise. Our platform offers real-time insights for both players and teams, revolutionizing the way you track and analyze performance.
        Gone are the days of relying solely on intuition and post-game analysis. With our cutting-edge technology powered by IoT and sensors, you can monitor every move, every play, and every heartbeat in real-time. Whether you're a coach strategizing for the next big match or a player looking to fine-tune your skills, our platform provides the data-driven edge you need to succeed.
        Join us as we redefine the game with unparalleled precision and depth. Welcome to the future of sports performance tracking.
      </p>
      <Footer>
        <FooterSection>
          <ContactInfo>
            <h3>Contact Us:</h3>
            <p>athleteinsighthub@gmail.com</p>
            <p>+62-XXX-XXXX</p>
          </ContactInfo>
        </FooterSection>
        <FooterSection>
          <h3>Follow Us:</h3>
          <SocialIcons>
            <SocialIconLink href="https://www.facebook.com" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </SocialIconLink>
            <SocialIconLink href="https://www.youtube.com" target="_blank" aria-label="YouTube">
              <i className="fab fa-youtube" />
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </SocialIconLink>
          </SocialIcons>
        </FooterSection>
        <FooterSection>
          <h3>Useful Links</h3>
          <UsefulLinks>
            <p><Link to="/introduction">Introduction</Link></p>
            <p><Link to="/about-us">About Us</Link></p>
            <p><Link to="/terms">Terms & Conditions</Link></p>
            <p><Link to="/privacy-policy">Privacy Policy</Link></p>
            <p><Link to="/support-center">Support Center</Link></p>
          </UsefulLinks>
        </FooterSection>
      </Footer>
    </Container>
  );
};

export default LandingPage;