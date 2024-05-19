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

// Section
export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
`;

// SubHeader
export const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  text-align: left;
`;

// Card
export const Card = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

// Card Image
export const CardImage = styled.div`
  flex: 1;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Placeholder for images
export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  color: #555;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Card Content
export const CardContent = styled.div`
  flex: 2;
  padding: 20px;
`;

// Card Title
export const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
`;

// Card Description
export const CardDescription = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;

// Quote
export const Quote = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

// Quote Text
export const QuoteText = styled.p`
  font-size: 18px;
  font-style: italic;
  margin: 0;
`;

// Quote Author
export const QuoteAuthor = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;