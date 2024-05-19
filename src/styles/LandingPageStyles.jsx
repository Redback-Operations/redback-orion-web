import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Ensure Link is imported

// Global Container
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
`;

// Image Link Container
export const ImageLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

// Image Link
export const ImageLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  margin: 10px;
  display: block;  // Ensure the link covers the whole image
`;

// Image Container
export const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

// Footer
export const Footer = styled.footer`
  margin-top: 50px;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid #ddd;
`;

// Footer Sections
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterText = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

export const ContactInfo = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: left;

  h3 {
    margin-bottom: 10px;
  }
`;

export const UsefulLinks = styled.div`
  font-size: 16px;
  text-align: right;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 150px;
  margin-top: 10px;
`;

export const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
`;