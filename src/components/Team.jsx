import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported

import {
  Container,
  Header,
  SubHeader,
  PlayerButton,
  PlayerList,
  StatsContainer,
  StatsDetails,
  GraphContainer,
  PositionImages,
  ImageContainer,
  Arrow,
  ImageText
} from '../styles/TeamStats';

import {
  Footer,
  FooterSection,
  ContactInfo,
  UsefulLinks,
  SocialIcons,
  SocialIconLink,
} from '../styles/LandingPageStyles';

import player1Image from './images/player1.png';
import player2Image from './images/player2.png';
import player3Image from './images/player3.png';
import player4Image from './images/player4.png';
// Import other player images similarly


import img1 from './images/playerstats-img1.png';
import img2 from './images/playerstats-img2.png';

const Team = () => {
  const [selectedPlayerImage, setSelectedPlayerImage] = useState(player1Image);

  const handlePlayerClick = (image) => {
    setSelectedPlayerImage(image);
  };

  return (
    <Container>
      <Header>Team Stats</Header>
      <SubHeader>
        Our platform offers a sophisticated analysis of team dynamics, strengths, and areas for improvement, empowering coaches, managers, and players alike to make data-driven decisions that drive success.
        Watch out team statistics from the matches and training sessions below:
      </SubHeader>
      <StatsContainer>
        <PlayerList>
          <PlayerButton onClick={() => handlePlayerClick(player1Image)}>Player 1</PlayerButton>
          <PlayerButton onClick={() => handlePlayerClick(player2Image)}>Player 2</PlayerButton>
          <PlayerButton onClick={() => handlePlayerClick(player3Image)}>Player 3</PlayerButton>
          <PlayerButton onClick={() => handlePlayerClick(player4Image)}>Player 4</PlayerButton>
          {/* Add other player buttons similarly */}
        </PlayerList>
        <StatsDetails>
          <GraphContainer>
            <img src={selectedPlayerImage} alt="Player Stats" />
          </GraphContainer>
          {/* Include graph data and other statistics here */}
        </StatsDetails>
      </StatsContainer>
      <SubHeader>
        Based upon the above stats, below are the recommended changes to the team player positions on field:
      </SubHeader>
      <PositionImages>
        <ImageContainer>
          <img src={img1} alt="Current Positions" />
          <ImageText>Current Positions</ImageText>
        </ImageContainer>
        <Arrow>→</Arrow>
        <ImageContainer>
          <img src={img2} alt="New Positions" />
          <ImageText>New Positions</ImageText>
        </ImageContainer>
      </PositionImages>
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

export default Team;