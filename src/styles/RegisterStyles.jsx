import styled from 'styled-components';

// Global Container
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: #f7f7f7;
  padding: 10px;
  padding-top: 75px;
`;

// Register Page Styles
export const RegisterWrapper = styled.div`
  display: flex;
  height: 700px;
  width: 1300px;
  max-width: 100%;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const RegisterBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 80px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Check = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.div`
  text-align: left;
  margin-left: 10px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.h3`
  margin: 0;
  color: #ff6b6b;
  font-size: 18px;
  font-weight: normal;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #ff6b6b;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #ff6b6b;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #ff4c4c;
    transform: translateY(-2px);
  }
`;

export const SocialLogin = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  transition: opacity 0.2s, transform 0.2s;
  background-color: ${props => props.bgColor};

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`;

export const Logo = styled.img`
  width: 80px;
`;

export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

// Horizontal line with "or" text
export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;

  &:before,
  &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }

  &:before {
    margin-right: 10px;
  }

  &:after {
    margin-left: 10px;
  }

  span {
    color: #aaa;
  }
`;

export const FooterText = styled.p`
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  text-align: center;
  a {
    color: #ff6b6b;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;