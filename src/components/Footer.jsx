import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #e97462;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2024 Player Tracking and Crowd Monitoring | All rights reserved | Designed by Ayush Kumar Som
    </FooterContainer>
  );
};

export default Footer;